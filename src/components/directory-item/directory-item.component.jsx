import { useNavigate } from "react-router-dom"

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.style"

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category
    const navigate = useNavigate();

    const onNavigateHanler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHanler}>
            <BackgroundImage 
                imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>購買</p>
            </Body>
        </DirectoryItemContainer>
    )
}


export default DirectoryItem