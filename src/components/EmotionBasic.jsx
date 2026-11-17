import { css } from "@emotion/react"

const panelStyle = css`
padding: 16px;
background-color: orange;
color: white;

&:hover {
background-color: navy;
}
`;

export default function EmotionBasic() {
    return (
        <div css={panelStyle}>
            <b>React</b>は、フロントエンド開発のためのJavaScriptライブラリです。
        </div>
    )
}
