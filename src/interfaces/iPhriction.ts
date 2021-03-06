import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface PhrictionContentSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids: Array<number>;
		phids: Array<phid>;
		documentPHIDs: Array<phid>;
		versions: Array<number>;
	};
	attachments: {
		content: boolean;
	};
	order?: 'newest' | 'oldest';
}

export interface retPhrictionContentSearchData extends RetSearchConstants {
	fields: {
		documentPHID: phid;
		version: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		content: {
			title: string;
			path: string;
			authorPHID: phid;
			content: { raw: string };
		};
	};
}

export interface RetPhrictionContentSearch extends ErrorCodes {
	result: {
		data: Array<retPhrictionContentSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}

export interface RetPhrictionCreate extends ErrorCodes {
	result: {
		phid: phid;
		uri: string;
		slug: string;
		version: number;
		authorPHID: phid;
		title: string;
		content: string;
		status: string;
		description: string;
		dateCreated: number;
	};
}

export interface PhrictionDocumentSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		statuses?: ['active' | 'deleted' | 'moved' | 'stub'];
		paths?: Array<string>;
		parentPaths?: Array<string>;
		ancestorPaths?: Array<string>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments: {
		content: boolean;
		subscribers: boolean;
		projects: boolean;
	};
	order?: 'newest' | 'oldest' | 'relevance' | 'hierarchy';
}

export interface retPhrictionDocumentSearchData extends RetSearchConstants {
	fields: {
		path: string;
		status: { value: string };
		spacePHID: phid;
		policy: { view: string };
	};
	attachments: {
		content: {
			title: string;
			path: string;
			authorPHID: phid;
			content: { raw: string };
		};
		projects: { projectPHIDs: Array<phid> };
		subscribers: {
			subscriberPHIDs: Array<phid>;
			subscriberCount: number;
			viewerIsSubscribed: false;
		};
	};
}

export interface RetPhrictionDocumentSearch extends ErrorCodes {
	result: {
		data: Array<retPhrictionDocumentSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}

export interface RetPhrictionEdit extends ErrorCodes {
	result: {
		phid: phid;
		uri: string;
		slug: string;
		version: number;
		authorPHID: phid;
		title: string;
		content: string;
		status: string;
		description: string;
		dateCreated: number;
	};
}

export interface RetPhrictionInfo extends ErrorCodes {
	result: {
		phid: phid;
		uri: string;
		slug: string;
		version: string;
		authorPHID: phid;
		title: string;
		content: string;
		status: string;
		description: string;
		dateCreated: string;
	};
}
