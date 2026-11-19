import MyButton from './MyButton';
import { action } from 'storybook/actions';
import { expect, fn, userEvent, within } from 'storybook/test';

// 基本情報を宣言
export default {
    title: 'storybook_first/MyButton',
    component: MyButton,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'],
    args: {
        onClick: action('CLICK')
    },
    argTypes: {
        primary: {
            type: 'boolean',
            description: 'Primaryカラーを有効にするか',
        },
        backgroundColor: {
            type: 'string',
            description: '背景色',
            control: {
                type: 'color',
                presetColors: ['#ff0000', '#00ff00', '#0000ff'] // カラーピッカーで色候補を指定
            }
        },
        size: {
            type: 'enum', // 列挙値
            options: ['small', 'medium', 'large'], // 選択肢
            control: { type: 'radio' }, // 操作するUI: ラジオボタン
            description: 'ボタンの大きさ'
        },
        label: {
            type: 'string',
            description: 'ボタンのキャプション'
        },
        onClick: {
            type: 'function',
            description: 'clickハンドラー'
        },
    }
};

// Index, Whiteストーリーを追加
export const Index = {
    args: {
        primary: true,
        size: 'medium',
        label: 'ボタン',
        // onClick: () => console.log('Hello, Storybook!')
        // イベントハンドラを準備
        onClick: fn() // ① 呼び出しを記録できる関数を用意
    },
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        // ② クリックすると、onClickに渡した関数が呼ばれる
        await userEvent.click(button);
        await userEvent.click(button);

        // ③ fn()が記録した呼び出し回数を確認
        await expect(args.onClick).toHaveBeenCalledTimes(2);
    }
};

export const White = {
    args: {
        size: 'small',
        label: 'ボタン',
        backgroundColor: '#fff'
    }
};

// Yellowストーリーを追加（ストーリの拡張）
export const Yellow = {
    args: {
        ...White.args, // スプレッド構文
        backgroundColor: 'lightYellow'
    }
};