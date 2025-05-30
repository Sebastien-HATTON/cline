// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.19.1
// source: state.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire"
import { Empty, EmptyRequest, Int64, Int64Request, Metadata, StringRequest } from "./common"

export const protobufPackage = "cline"

export enum PlanActMode {
	PLAN = 0,
	ACT = 1,
	UNRECOGNIZED = -1,
}

export function planActModeFromJSON(object: any): PlanActMode {
	switch (object) {
		case 0:
		case "PLAN":
			return PlanActMode.PLAN
		case 1:
		case "ACT":
			return PlanActMode.ACT
		case -1:
		case "UNRECOGNIZED":
		default:
			return PlanActMode.UNRECOGNIZED
	}
}

export function planActModeToJSON(object: PlanActMode): string {
	switch (object) {
		case PlanActMode.PLAN:
			return "PLAN"
		case PlanActMode.ACT:
			return "ACT"
		case PlanActMode.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED"
	}
}

export interface State {
	stateJson: string
}

export interface TogglePlanActModeRequest {
	metadata?: Metadata | undefined
	chatSettings?: ChatSettings | undefined
	chatContent?: ChatContent | undefined
}

export interface ChatSettings {
	mode: PlanActMode
	preferredLanguage?: string | undefined
	openAiReasoningEffort?: string | undefined
}

export interface ChatContent {
	message?: string | undefined
	images: string[]
}

function createBaseState(): State {
	return { stateJson: "" }
}

export const State: MessageFns<State> = {
	encode(message: State, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.stateJson !== "") {
			writer.uint32(10).string(message.stateJson)
		}
		return writer
	},

	decode(input: BinaryReader | Uint8Array, length?: number): State {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		let end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseState()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) {
						break
					}

					message.stateJson = reader.string()
					continue
				}
			}
			if ((tag & 7) === 4 || tag === 0) {
				break
			}
			reader.skip(tag & 7)
		}
		return message
	},

	fromJSON(object: any): State {
		return { stateJson: isSet(object.stateJson) ? globalThis.String(object.stateJson) : "" }
	},

	toJSON(message: State): unknown {
		const obj: any = {}
		if (message.stateJson !== "") {
			obj.stateJson = message.stateJson
		}
		return obj
	},

	create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
		return State.fromPartial(base ?? ({} as any))
	},
	fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
		const message = createBaseState()
		message.stateJson = object.stateJson ?? ""
		return message
	},
}

function createBaseTogglePlanActModeRequest(): TogglePlanActModeRequest {
	return { metadata: undefined, chatSettings: undefined, chatContent: undefined }
}

export const TogglePlanActModeRequest: MessageFns<TogglePlanActModeRequest> = {
	encode(message: TogglePlanActModeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(10).fork()).join()
		}
		if (message.chatSettings !== undefined) {
			ChatSettings.encode(message.chatSettings, writer.uint32(18).fork()).join()
		}
		if (message.chatContent !== undefined) {
			ChatContent.encode(message.chatContent, writer.uint32(26).fork()).join()
		}
		return writer
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TogglePlanActModeRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		let end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseTogglePlanActModeRequest()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) {
						break
					}

					message.metadata = Metadata.decode(reader, reader.uint32())
					continue
				}
				case 2: {
					if (tag !== 18) {
						break
					}

					message.chatSettings = ChatSettings.decode(reader, reader.uint32())
					continue
				}
				case 3: {
					if (tag !== 26) {
						break
					}

					message.chatContent = ChatContent.decode(reader, reader.uint32())
					continue
				}
			}
			if ((tag & 7) === 4 || tag === 0) {
				break
			}
			reader.skip(tag & 7)
		}
		return message
	},

	fromJSON(object: any): TogglePlanActModeRequest {
		return {
			metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
			chatSettings: isSet(object.chatSettings) ? ChatSettings.fromJSON(object.chatSettings) : undefined,
			chatContent: isSet(object.chatContent) ? ChatContent.fromJSON(object.chatContent) : undefined,
		}
	},

	toJSON(message: TogglePlanActModeRequest): unknown {
		const obj: any = {}
		if (message.metadata !== undefined) {
			obj.metadata = Metadata.toJSON(message.metadata)
		}
		if (message.chatSettings !== undefined) {
			obj.chatSettings = ChatSettings.toJSON(message.chatSettings)
		}
		if (message.chatContent !== undefined) {
			obj.chatContent = ChatContent.toJSON(message.chatContent)
		}
		return obj
	},

	create<I extends Exact<DeepPartial<TogglePlanActModeRequest>, I>>(base?: I): TogglePlanActModeRequest {
		return TogglePlanActModeRequest.fromPartial(base ?? ({} as any))
	},
	fromPartial<I extends Exact<DeepPartial<TogglePlanActModeRequest>, I>>(object: I): TogglePlanActModeRequest {
		const message = createBaseTogglePlanActModeRequest()
		message.metadata =
			object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined
		message.chatSettings =
			object.chatSettings !== undefined && object.chatSettings !== null
				? ChatSettings.fromPartial(object.chatSettings)
				: undefined
		message.chatContent =
			object.chatContent !== undefined && object.chatContent !== null
				? ChatContent.fromPartial(object.chatContent)
				: undefined
		return message
	},
}

function createBaseChatSettings(): ChatSettings {
	return { mode: 0, preferredLanguage: undefined, openAiReasoningEffort: undefined }
}

export const ChatSettings: MessageFns<ChatSettings> = {
	encode(message: ChatSettings, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.mode !== 0) {
			writer.uint32(8).int32(message.mode)
		}
		if (message.preferredLanguage !== undefined) {
			writer.uint32(18).string(message.preferredLanguage)
		}
		if (message.openAiReasoningEffort !== undefined) {
			writer.uint32(26).string(message.openAiReasoningEffort)
		}
		return writer
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ChatSettings {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		let end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseChatSettings()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 8) {
						break
					}

					message.mode = reader.int32() as any
					continue
				}
				case 2: {
					if (tag !== 18) {
						break
					}

					message.preferredLanguage = reader.string()
					continue
				}
				case 3: {
					if (tag !== 26) {
						break
					}

					message.openAiReasoningEffort = reader.string()
					continue
				}
			}
			if ((tag & 7) === 4 || tag === 0) {
				break
			}
			reader.skip(tag & 7)
		}
		return message
	},

	fromJSON(object: any): ChatSettings {
		return {
			mode: isSet(object.mode) ? planActModeFromJSON(object.mode) : 0,
			preferredLanguage: isSet(object.preferredLanguage) ? globalThis.String(object.preferredLanguage) : undefined,
			openAiReasoningEffort: isSet(object.openAiReasoningEffort)
				? globalThis.String(object.openAiReasoningEffort)
				: undefined,
		}
	},

	toJSON(message: ChatSettings): unknown {
		const obj: any = {}
		if (message.mode !== 0) {
			obj.mode = planActModeToJSON(message.mode)
		}
		if (message.preferredLanguage !== undefined) {
			obj.preferredLanguage = message.preferredLanguage
		}
		if (message.openAiReasoningEffort !== undefined) {
			obj.openAiReasoningEffort = message.openAiReasoningEffort
		}
		return obj
	},

	create<I extends Exact<DeepPartial<ChatSettings>, I>>(base?: I): ChatSettings {
		return ChatSettings.fromPartial(base ?? ({} as any))
	},
	fromPartial<I extends Exact<DeepPartial<ChatSettings>, I>>(object: I): ChatSettings {
		const message = createBaseChatSettings()
		message.mode = object.mode ?? 0
		message.preferredLanguage = object.preferredLanguage ?? undefined
		message.openAiReasoningEffort = object.openAiReasoningEffort ?? undefined
		return message
	},
}

function createBaseChatContent(): ChatContent {
	return { message: undefined, images: [] }
}

export const ChatContent: MessageFns<ChatContent> = {
	encode(message: ChatContent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message !== undefined) {
			writer.uint32(10).string(message.message)
		}
		for (const v of message.images) {
			writer.uint32(18).string(v!)
		}
		return writer
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ChatContent {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		let end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseChatContent()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) {
						break
					}

					message.message = reader.string()
					continue
				}
				case 2: {
					if (tag !== 18) {
						break
					}

					message.images.push(reader.string())
					continue
				}
			}
			if ((tag & 7) === 4 || tag === 0) {
				break
			}
			reader.skip(tag & 7)
		}
		return message
	},

	fromJSON(object: any): ChatContent {
		return {
			message: isSet(object.message) ? globalThis.String(object.message) : undefined,
			images: globalThis.Array.isArray(object?.images) ? object.images.map((e: any) => globalThis.String(e)) : [],
		}
	},

	toJSON(message: ChatContent): unknown {
		const obj: any = {}
		if (message.message !== undefined) {
			obj.message = message.message
		}
		if (message.images?.length) {
			obj.images = message.images
		}
		return obj
	},

	create<I extends Exact<DeepPartial<ChatContent>, I>>(base?: I): ChatContent {
		return ChatContent.fromPartial(base ?? ({} as any))
	},
	fromPartial<I extends Exact<DeepPartial<ChatContent>, I>>(object: I): ChatContent {
		const message = createBaseChatContent()
		message.message = object.message ?? undefined
		message.images = object.images?.map((e) => e) || []
		return message
	},
}

export type StateServiceDefinition = typeof StateServiceDefinition
export const StateServiceDefinition = {
	name: "StateService",
	fullName: "cline.StateService",
	methods: {
		getLatestState: {
			name: "getLatestState",
			requestType: EmptyRequest,
			requestStream: false,
			responseType: State,
			responseStream: false,
			options: {},
		},
		subscribeToState: {
			name: "subscribeToState",
			requestType: EmptyRequest,
			requestStream: false,
			responseType: State,
			responseStream: true,
			options: {},
		},
		toggleFavoriteModel: {
			name: "toggleFavoriteModel",
			requestType: StringRequest,
			requestStream: false,
			responseType: Empty,
			responseStream: false,
			options: {},
		},
		resetState: {
			name: "resetState",
			requestType: EmptyRequest,
			requestStream: false,
			responseType: Empty,
			responseStream: false,
			options: {},
		},
		togglePlanActMode: {
			name: "togglePlanActMode",
			requestType: TogglePlanActModeRequest,
			requestStream: false,
			responseType: Empty,
			responseStream: false,
			options: {},
		},
		updateTerminalConnectionTimeout: {
			name: "updateTerminalConnectionTimeout",
			requestType: Int64Request,
			requestStream: false,
			responseType: Int64,
			responseStream: false,
			options: {},
		},
	},
} as const

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
	? P
	: P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never }

function isSet(value: any): boolean {
	return value !== null && value !== undefined
}

export interface MessageFns<T> {
	encode(message: T, writer?: BinaryWriter): BinaryWriter
	decode(input: BinaryReader | Uint8Array, length?: number): T
	fromJSON(object: any): T
	toJSON(message: T): unknown
	create<I extends Exact<DeepPartial<T>, I>>(base?: I): T
	fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T
}
