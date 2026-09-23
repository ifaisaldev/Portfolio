import { Fragment } from 'react';
import { ArrowDown } from 'lucide-react';

interface FlowNode {
    label: string;
    detail?: string;
}

interface FlowDiagramProps {
    rows: FlowNode[][];
    label: string;
}

// Top-to-bottom system diagram for projects that have no public screenshot.
const FlowDiagram = ({ rows, label }: FlowDiagramProps) => {
    return (
        <figure aria-label={label} className="flex w-full flex-col items-center gap-2 px-6 py-8">
            {rows.map((row, index) => (
                <Fragment key={index}>
                    {index > 0 && <ArrowDown className="h-4 w-4 text-blue-400/70" aria-hidden="true" />}
                    <div className="flex w-full max-w-sm justify-center gap-2">
                        {row.map((node) => (
                            <div
                                key={node.label}
                                className="flex-1 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-center"
                            >
                                <div className="text-sm font-medium text-white">{node.label}</div>
                                {node.detail && <div className="mt-0.5 text-xs text-gray-400">{node.detail}</div>}
                            </div>
                        ))}
                    </div>
                </Fragment>
            ))}
        </figure>
    );
};

export default FlowDiagram;
