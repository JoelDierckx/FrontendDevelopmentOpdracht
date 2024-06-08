import { Button } from 'antd'
import { CSSProperties, FunctionComponent } from 'react'
interface SubmitButtonProps {
    setState: (state: string) => void,
}
const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ setState }) => {


    const ButtonStyle: CSSProperties = {
        alignSelf: "center",
        display: "block",
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    }
    return (
        <>
            <Button onClick={() => setState("Win")} style={ButtonStyle}>Submit</Button>
        </>
    )
}
export default SubmitButton