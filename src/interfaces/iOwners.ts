import { ErrorCodes, BeforeAfterLimit, phid } from './iGlobal';

export interface ownerSearchTransactions {
	type:
		| 'name'
		| 'owners'
		| 'dominion'
		| 'autoReview'
		| 'auditing'
		| 'description'
		| 'status'
		| 'ignored'
		| 'paths.set'
		| 'view'
		| 'edit'
		| 'mfa';
	value: any;
}

export interface OwnersEdit {
	transactions: Array<ownerSearchTransactions>;
	objectIdentifier?: number | string;
}

export interface OwnersSearch extends BeforeAfterLimit {
	queryKey?: 'authority' | 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		owners?: Array<string>;
		name?: string;
		repositories: Array<string>;
		paths?: Array<string>;
		statuses?: ['active' | 'archived'];
		query?: string;
	};
	attachments?: {
		paths?: boolean;
	};
	order?: 'newest' | 'oldest' | 'name' | 'relevance';
}

export interface retOwnersSearchDataOwners {
	ownerPHID: phid;
}

export interface RetOwnersSearch extends ErrorCodes {
	result: {
		data: [
			{
				id: 1;
				type: string;
				phid: phid;
				fields: {
					name: string;
					description: string;
					status: string;
					owners: Array<retOwnersSearchDataOwners>;
					review: { value: string };
					audit: { value: string };
					dominion: {
						value: string;
						label: string;
						short: string;
					};
					ignored: object;
					policy: { view: string };
				};
				attachments: { paths: { paths: Array<string> } };
			}
		];
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}
