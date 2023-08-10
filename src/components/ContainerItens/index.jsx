import { ContainerItens as ContainerI } from "./style"

// eslint-disable-next-line react/prop-types
function ContainerItens({children, isBlur}) {

    return <ContainerI isBlur={isBlur}>{children}</ContainerI>
}

export default ContainerItens