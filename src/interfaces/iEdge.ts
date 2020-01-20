import { BeforeAfterLimit, phid } from './iGlobal';

export interface EdgeSearch extends BeforeAfterLimit {
	sourcePHIDs: Array<phid>;
	types: [
		| 'commit.revision'
		| 'commit.task'
		| 'revision.child'
		| 'revision.commit'
		| 'revision.parent'
		| 'revision.task'
		| 'task.commit'
		| 'task.duplicate'
		| 'task.merged'
		| 'task.parent'
		| 'task.revision'
		| 'task.subtask'
	];
	destinationPHIDs?: Array<phid>;
}
