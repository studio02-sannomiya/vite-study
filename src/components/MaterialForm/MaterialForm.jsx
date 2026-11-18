
import { useState } from 'react';
import {
    Button,
    TextField,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';

export default function MaterialForm() {
    // 入力値をまとめて管理
    const [form, setForm] = useState({
        name: '',
        gender: '',
        email: '',
        memo: '',
    });

    // エラーメッセージを管理
    const [errors, setErrors] = useState({});

    // 入力値を更新する関数
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        // 入力した項目のエラーを消す
        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    // 送信時の処理
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // 名前のチェック
        if (!form.name.trim()) {
            newErrors.name = '名前は必須入力です。';
        } else if (form.name.length > 20) {
            newErrors.name = '名前は20文字以内にしてください。';
        }

        // 性別のチェック
        if (!form.gender) {
            newErrors.gender = '性別は必須です。';
        }

        // メールアドレスのチェック
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.email.trim()) {
            newErrors.email = 'メールアドレスは必須入力です。';
        } else if (!emailPattern.test(form.email)) {
            newErrors.email = 'メールアドレスの形式が不正です。';
        }

        // メモのチェック
        if (!form.memo.trim()) {
            newErrors.memo = '備考は必須入力です。';
        } else if (form.memo.length < 10) {
            newErrors.memo = '備考は10文字以上にしてください。';
        }

        // エラーをStateに保存
        setErrors(newErrors);

        // エラーがあれば送信しない
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // 送信成功時の処理
        console.log('送信データ:', form);
        alert('送信しました');
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {/* 名前 */}
            <div>
                <TextField
                    label="名前"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    margin="normal"
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                />
            </div>

            {/* 性別 */}
            <div>
                <FormControl error={Boolean(errors.gender)}>
                    <FormLabel component="legend">性別：</FormLabel>

                    <RadioGroup
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="男性"
                        />
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="女性"
                        />
                    </RadioGroup>

                    <FormHelperText>
                        {errors.gender}
                    </FormHelperText>
                </FormControl>
            </div>

            {/* メールアドレス */}
            <div>
                <TextField
                    type="email"
                    label="メールアドレス"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    margin="normal"
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                />
            </div>

            {/* メモ */}
            <div>
                <TextField
                    label="メモ"
                    name="memo"
                    value={form.memo}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={4}
                    error={Boolean(errors.memo)}
                    helperText={errors.memo}
                />
            </div>

            {/* 送信ボタン */}
            <div>
                <Button variant="contained" type="submit">
                    送信
                </Button>
            </div>
        </form>
    );
}