export interface Createtask {
	title: string;
	description?: string;
	ownerPHID?: string;
	viewPolicy?: string;
	editPolicy?: string;
	ccPHIDs?: Array<string>;
	priority?: number;
	projectPHIDs?: Array<string>;
	auxiliary: object;
}

export interface RetCreatetask {
	result: {
		id: string | number;
		phid: string;
		authorPHID: string;
		ownerPHID: string;
		ccPHIDs: Array<string>;
		status: string;
		statusName: string;
		isClosed: boolean;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<string>;
		uri: string;
		auxiliary: object;
		objectName: string;
		dateCreated: string | number;
		dateModified: string | number;
		dependsOnTaskPHIDs: Array<string>;
	};
	error_code: any;
	error_info: any;
}

type editTransactions = {
	type:
		| 'parent'
		| 'column'
		| 'space'
		| 'title'
		| 'owner'
		| 'status'
		| 'priority'
		| 'description'
		| 'parents.add'
		| 'parents.remove'
		| 'parents.set'
		| 'subtasks.add'
		| 'subtasks.remove'
		| 'subtasks.set'
		| 'commits.add'
		| 'commits.remove'
		| 'commits.set'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'subtype'
		| 'commnet'
		| 'mfa';
	value: string | boolean;
};

export interface Edit {
	transactions: Array<editTransactions>;
	objectIdentifier: number | string;
}

export interface RetEdit {
	result: {
		object: { id: number; phid: string };
		transactions: [{ phid: string }];
	};
	error_code: any;
	error_info: any;
}

type gettasktransactions = {
	taskID: string;
	transactionID: string;
	transactionPHID: string;
	transactionType: string;
	oldValue: string;
	newValue: string;
	comments: string;
	authorPHID: string;
	dateCreated: string;
};

export interface RetGettasktransactions {
	result: {
		[id: string]: Array<gettasktransactions>;
	};
	error_code: any;
	error_info: any;
}

export interface RetInfo {
	result: {
		id: string;
		phid: string;
		authorPHID: string;
		ownerPHID: string;
		ccPHIDs: Array<string>;
		status: string;
		statusName: string;
		test: Array<string>;
		isClosed: boolean;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<string>;
		uri: string;
		auxiliary: object;
		objectName: string;
		dateCreated: string;
		dateModified: string;
		dependsOnTaskPHIDs: Array<string>;
	};
	error_code: any;
	error_info: any;
}

type prioritysearchData = {
	name: string;
	keywords: Array<string>;
	short: string;
	color: string;
	value: number;
};

export interface RetPrioritySearch {
	result: {
		data: Array<prioritysearchData>;
	};
	error_code: any;
	error_info: any;
}

export interface Query {
	ids?: Array<number>;
	phids?: Array<string>;
	ownerPHIDs?: Array<string>;
	authorPHIDs?: Array<string>;
	projectPHIDs?: Array<string>;
	ccPHIDs?: Array<string>;
	fullText?: string;
	status?:
		| 'status-any'
		| 'status-open'
		| 'status-closed'
		| 'status-resolved'
		| 'status-wontfix'
		| 'status-invalid'
		| 'status-spite'
		| 'status-duplicate';
	order?: 'order-priority' | 'order-created' | 'order-modified';
	limit?: number;
	offset?: number;
}

export interface RetQuery {
	result: {
		[phid: string]: {
			id: string;
			phid: string;
			authorPHID: string;
			ownerPHID: string;
			ccPHIDs: Array<string>;
			status: string;
			statusName: string;
			isClosed: false;
			priority: string;
			priorityColor: string;
			title: string;
			description: string;
			projectPHIDs: Array<string>;
			uri: string;
			auxiliary: object;
			objectName: string;
			dateCreated: string;
			dateModified: string;
			dependsOnTaskPHIDs: Array<string>;
		};
	};
	error_code: any;
	error_info: any;
}

export interface RetQuerystatuses {
	result: {
		defaultStatus: string;
		defaultClosedStatus: string;
		duplicateStatus: string;
		openStatuses: Array<string>;
		closedStatuses: {
			[index: string]: string;
		};
		allStatuses: Array<string>;
		statusMap: {
			open: string;
			resolved: string;
			wontfix: string;
			invalid: string;
			duplicate: string;
			spite: string;
		};
	};
	error_code: any;
	error_info: any;
}

export interface Search {
	queryKey?: 'assigned' | 'authored' | 'subscribed' | 'open' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		assigned?: Array<string>;
		authorPHIDs?: Array<string>;
		statuses?: [
			'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
		];
		priorities?: Array<number>;
		subtypes?: Array<string>;
		columnPHIDs?: Array<string>;
		hasParents?: boolean;
		hasSubtasks?: boolean;
		parentIDs?: Array<number>;
		subtaskIDs?: Array<number>;
		createdStart?: number;
		createdEnd?: number;
		modifiedStart?: number;
		modifiedEnd?: number;
		closedStart?: number;
		closedEnd?: number;
		closerPHIDs?: Array<string>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments?: {
		columns?: boolean;
		subscribers?: boolean;
		projects?: boolean;
	};
	order?:
		| 'priority'
		| 'updated'
		| 'outdated'
		| 'newest'
		| 'oldest'
		| 'closed'
		| 'title'
		| 'relevance'
		| [string];
	before?: string;
	after?: string;
	limit?: number;
}

type retSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		name: string;
		description: { raw: string };
		authorPHID: string;
		ownerPHID: string;
		status: { value: string; color: string };
		priority: { value: number; name: string };
		points: number;
		subtype: string;
		closerPHID: string;
		dateClosed: number;
		spacePHID: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: object;
};

export interface RetSearch {
	result: {
		data: Array<retSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: 100; after: any; before: any; order: any };
	};
	error_code: string;
	error_info: string;
}

type retStatusSearchData = {
	name: string;
	value: string;
	closed: boolean;
	special: string;
};

export interface RetStatusSearch {
	result: {
		data: Array<retStatusSearchData>;
	};
	error_code: string;
	error_info: string;
}

export interface Update {
	id?: number;
	phid?: string;
	title?: string;
	description?: string;
	ownerPHID?: string;
	viewPolicy?: string;
	editPolicy?: string;
	ccPHIDs?: Array<string>;
	priority?: number;
	projectPHIDs?: Array<string>;
	auxiliary?: object;
	status?: string;
	comments?: string;
}

export interface RetUpdate {
	result: {
		id: string;
		phid: string;
		authorPHID: string;
		ownerPHID: string;
		ccPHIDs: Array<string>;
		status: string;
		statusName: string;
		isClosed: false;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<string>;
		uri: string;
		auxiliary: Array<object>;
		objectName: string;
		dateCreated: string;
		dateModified: string;
		dependsOnTaskPHIDs: Array<string>;
	};
	error_code: string;
	error_info: string;
}
