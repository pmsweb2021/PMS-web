export interface ResponseObj<T> {
	isError: boolean;
	message: string;
	errorMessages: { [key: string]: string[] };
	data: T;
}

export interface QueryParameters {
	limit?: number;
	page?: number;
	offset?: number;
	search?: number;
}

export interface NumberToString {
	[key: number]: string;
}

export interface AwsCredentials {
	bucketURL: string;
	region: string;
	bucket: string;
	credentials: {
		AccessKeyId: string;
		SecretAccessKey: string;
		SessionToken: string;
		Expiration: Date;
	};
}

export interface AwsParamsSchema {
	Key: string;
	ContentType: string;
	Body: File;
	Bucket: string;
}

export * from './state';
