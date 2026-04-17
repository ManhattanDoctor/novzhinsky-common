import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional, ApiSchema } from '@ts-core/swagger';
import * as _ from 'lodash';

@ApiSchema({ description: 'Stored file' })
export class File {
    @ApiProperty({ description: 'Unique file ID', example: 1 })
    public id: number;

    @ApiProperty({ description: 'File UID', example: 'file-abc-123' })
    public uid: string;

    @ApiProperty({ description: 'File type category', example: 'DOCUMENT' })
    public type: FileType;

    @ApiProperty({ description: 'File name', example: 'contract.pdf' })
    public name: string;

    @ApiProperty({ description: 'File storage path', example: '/uploads/2024/01/contract.pdf' })
    public path: string;

    @ApiProperty({ description: 'File size in bytes', example: 1048576 })
    public size: number;

    @ApiProperty({ description: 'MIME type', example: 'application/pdf' })
    public mime: FileMime;

    @ApiProperty({ description: 'File content hash (SHA-256)', example: 'e3b0c44298fc1c149afbf4c8996fb924' })
    public hash: string;

    @ApiProperty({ description: 'File extension', example: 'pdf' })
    public extension: string;

    @ApiPropertyOptional({ type: [String], description: 'File tags for categorization', example: ['contract', 'signed'] })
    public tags?: Array<string>;

    @ApiPropertyOptional({ description: 'Owner user ID', example: '550e8400-e29b-41d4-a716-446655440000' })
    public userId?: string;

    @ApiPropertyOptional({ description: 'File privacy setting', example: 'PUBLIC' })
    public privacy?: FilePrivacy;

    @ApiPropertyOptional({ description: 'Owner company ID', example: 'company-001' })
    public companyId?: string;

    @ApiPropertyOptional({ description: 'Electronic signature file ID', example: 42 })
    public signatureId?: number;

    @ApiPropertyOptional({ type: [String], description: 'Access permissions', example: ['read', 'write'] })
    public permissions?: Array<string>;

    @ApiProperty({ type: Date, description: 'File creation date' })
    @Type(() => Date)
    public created: Date;

    @ApiPropertyOptional({ type: () => File, description: 'Electronic signature file' })
    @Type(() => File)
    public signature?: File;
}

export interface IFileBufferInput {
    mime?: FileMime;
    source: string;
}

export enum FilePrivacy {
    PUBLIC = 'PUBLIC'
}

export enum FileType {
    IMAGE = 'IMAGE',
    AUDIO = 'AUDIO',
    VIDEO = 'VIDEO',
    DOCUMENT = 'DOCUMENT',
    SIGNATURE = 'SIGNATURE',
}
export enum FileImageExtension {
    PNG = 'png',
    JPG = 'jpg',
    JPEG = 'jpeg',
}
export enum FileAudioExtension {
    MP3 = 'mp3',
    AAC = 'aac',
    WAV = 'wav',
    OPUS = 'opus',
    FLAC = 'flac',
    MPGA = 'mpga',
}
export enum FileVideoExtension {
    MP4 = 'mp4',
    AVI = 'avi',
    WEBM = 'webm',
    MPEG = 'mpeg',
}
export enum FileSignatureExtension {
    SIG = 'sig',
    P7S = 'p7s'
}
export enum FileDocumentExtension {
    TXT = 'txt',
    PDF = 'pdf',
    DOC = 'doc',
    XML = 'xml',
    DOCX = 'docx',
    XLSX = 'xlsx',
    JSON = 'json',
}
export type FileExtension = FileImageExtension | FileDocumentExtension | FileAudioExtension | FileVideoExtension | FileSignatureExtension;
export const FileImageExtensions: Array<FileImageExtension> = Object.values(FileImageExtension);
export const FileAudioExtensions: Array<FileAudioExtension> = Object.values(FileAudioExtension);
export const FileVideoExtensions: Array<FileVideoExtension> = Object.values(FileVideoExtension);
export const FileDocumentExtensions: Array<FileDocumentExtension> = Object.values(FileDocumentExtension);
export const FileSignatureExtensions: Array<FileSignatureExtension> = Object.values(FileSignatureExtension);

export const FileExtensions = [...FileImageExtensions, ...FileDocumentExtensions, ...FileAudioExtensions, ...FileVideoExtensions, ...FileSignatureExtensions];
export const FileBinaryExtensions = [...FileImageExtensions, ...FileAudioExtensions, ...FileVideoExtensions];

export type FileTypes = FileType | Array<FileType>;
export type FileExtensions = FileExtension | Array<FileExtension>;

export enum FileTag {
    CROWDSALE_SUCCEED_REPORT = 'CROWDSALE_SUCCEED_REPORT',
}
export enum FileImageMime {
    PNG = 'image/png',
    JPEG = 'image/jpeg',
}
export enum FileAudioMime {
    AAC = 'audio/aac',
    OPUS = 'audio/opus',
    FLAC = 'audio/x-flac',
    MPEG = 'audio/mpeg',
    WAV = 'audio/wav',
}
export enum FileVideoMime {
    MP4 = 'video/mp4',
    AVI = 'video/avi',
    WEBM = 'video/webm',
    MPEG = 'video/mpeg',
}
export enum FileDocumentMime {
    TXT = 'text/plain',
    XML = 'application/xml',
    PDF = 'application/pdf',
    DOC = 'application/msword',
    JSON = 'application/json',
    XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}
export enum FileSignatureMime {
    SIG = 'application/pgp-signature',
    P7S = 'application/pkcs7-signature',
}
export const FileImageMimes: Array<string> = Object.values(FileImageMime);
export const FileAudioMimes: Array<string> = Object.values(FileAudioMime);
export const FileVideoMimes: Array<string> = Object.values(FileVideoMime);
export const FileDocumentMimes: Array<string> = Object.values(FileDocumentMime);
export const FileSignatureMimes: Array<string> = Object.values(FileSignatureMime);
export const FileMimes = [...FileImageMimes, ...FileDocumentMimes, ...FileAudioMimes, ...FileVideoMimes, ...FileSignatureMimes];
export type FileMime = FileImageMime | FileDocumentMime | FileAudioMime | FileVideoMime | FileSignatureMime;

export const FILE_SIZE_MAX = 1073741824; // 1000 Mb
export const FILE_AMOUNT_MAX = 100;

export const FILE_NAME_MIN_LENGTH = 3;
export const FILE_NAME_MAX_LENGTH = 124;
