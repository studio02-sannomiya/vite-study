import { beforeEach } from "vitest";
import { getTriangleArea } from "./MyUtil";

describe('getTriangleArea関数', () => {

    beforeEach(() => {
        console.log(new Date().toLocaleString());
    });

    test('底辺10・高さ2の三角形の面積は10になる', () => {
        expect(getTriangleArea(10, 2)).toBe(10);
    });

    test('底辺0・高さ5の三角形の面積は0になる', () => {
        expect(getTriangleArea(0, 5)).toBe(0)
    });

    test('底辺3・高さ5の三角形の面積は7.5になる', () => {
        expect(getTriangleArea(3, 5)).toBe(7.5)
    });

});