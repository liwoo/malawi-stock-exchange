//@flow

export type Rate = {
    id: number, counter: string, name: string, color: string, rate: number, gain: number, lastTenDays: Array<{ date: string, rate: number }>
}