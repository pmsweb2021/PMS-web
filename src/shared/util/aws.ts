import * as AWS from 'aws-sdk';
import { AwsCredentials, AwsParamsSchema } from '../interface';

/**
 * getS3UploadParams - generates s3-upload parameters
 * @param file - file
 * @param id - ID
 * @param bucket - bucket
 */
export const getS3UploadParams = (file: File, key: string, bucket: string): AwsParamsSchema => {
	return {
		Body: file,
		Bucket: bucket,
		ContentType: file.type,
		Key: key
	};
};

/**
 * updateAwsConfig - updates aws configuration
 * @param awsCreds - credentials retrieved from server
 */
export const updateAwsConfig = (awsCreds: AwsCredentials) => {
	AWS.config.update({
		accessKeyId: awsCreds.credentials.AccessKeyId,
		secretAccessKey: awsCreds.credentials.SecretAccessKey,
		sessionToken: awsCreds.credentials.SessionToken,
		region: awsCreds.region
	});
	return AWS;
};

/**
 * manageUpload - returns a managedUpload object
 * @param params - aws s3 upload parameters
 */
export const manageUpload = (params: AwsParamsSchema) => {
	return new AWS.S3.ManagedUpload({ partSize: 5 * 1024 * 1024, params: params });
};
