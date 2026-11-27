import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Counterコンポーネント', () => {
    test('初期表示では、Count: 0が表示される', () => {

        // Counterコンポーネントをjsdom（テスト環境のDOM）に描画する
        render(<Counter />);

        // 取得した要素そのものをexpect()に渡して、それがドキュメント内にあることを確認する
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    });

    test('ボタンをクリックするとカウントが増える', async () => {

        // ユーザー操作を再現するためのオブジェクトを作る
        const user = userEvent.setup();

        // Counterコンポーネントをjsdom（テスト環境のDOM）に描画する
        render(<Counter />);

        // 増やすボタンの取得
        const button = screen.getByRole('button', { name: '増やす' });

        // 増やすボタンをクリックする
        await user.click(button);

        // 取得した要素そのものをexpect()に渡して、それがドキュメント内にあることを確認する
        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });

    test('ボタンを3回クリックするとカウントが3増える', async () => {

        // ユーザー操作を再現するためのオブジェクトを作る
        const user = userEvent.setup();

        // Counterコンポーネントをjsdom（テスト環境のDOM）に描画する
        render(<Counter />);

        // 増やすボタンの取得
        const button = screen.getByRole('button', { name: '増やす' });

        // 増やすボタンをクリックする
        await user.click(button);
        await user.click(button);
        await user.click(button);

        // 取得した要素そのものをexpect()に渡して、それがドキュメント内にあることを確認する
        expect(screen.getByText("Count: 3")).toBeInTheDocument();
    });

});
