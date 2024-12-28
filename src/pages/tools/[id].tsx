import { useParams, Navigate } from 'react-router-dom';
import { toolsData } from '../../data/toolsData';
import { toolProcessors } from '../../services/toolProcessors';
import { useProcessResult } from '../../hooks/useProcessResult';
import { ToolLayout } from '../../components/tools/shared/ToolLayout';
import { ToolHeader } from '../../components/tools/shared/ToolHeader';
import { ToolForm } from '../../components/tools/shared/ToolForm';
import { ToolResultDisplay } from '../../components/tools/shared/ToolResultDisplay';

export function ToolPage() {
  const { id } = useParams();
  const tool = toolsData.find(t => t.id === id);

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  const processor = toolProcessors[tool.id as keyof typeof toolProcessors];
  const {
    input,
    setInput,
    isProcessing,
    result,
    error,
    processInput
  } = useProcessResult(processor);

  return (
    <ToolLayout>
      <ToolHeader tool={tool} />

      <ToolForm
        input={input}
        onInputChange={(e) => setInput(e.target.value)}
        onSubmit={processInput}
        isProcessing={isProcessing}
        error={error}
        placeholder={tool.demoPrompt}
      />

      {result && <ToolResultDisplay result={result} />}
    </ToolLayout>
  );
}