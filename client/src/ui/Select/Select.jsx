import withFormField from "../../hoc/withFormField/withFormField";

const Select = ({children, ...props}) => (
    <select {...props}>
        {children}
    </select>
)

export default withFormField(Select);