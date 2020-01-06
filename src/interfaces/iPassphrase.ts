export interface PassphraseQuery {
	ids?: Array<number>;
	phids?: Array<string>;
	needSecrets?: boolean;
	needPublicKeys?: boolean;
	order?: string;
	before?: string;
	after?: string;
	limit?: number;
}

export interface RetPassphraseQuery {
	result: {
		data: {
			[phid: string]: {
				id: string;
				phid: string;
				type: string;
				name: string;
				description: string;
				uri: string;
				monogram: string;
				username: string;
				material: {
					publicKey: string;
					noAPIAccess: string;
				};
			};
		};
		cursor: { limit: number; after: string; before: string };
	};
	error_code: string;
	error_info: string;
}