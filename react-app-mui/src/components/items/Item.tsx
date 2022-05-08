import starIcon from "../icons/star.svg";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";
import {TextContainer, TextElement, DateElement} from "./styles/Item/TextContainer";
import {ButtonContainer, IconElement} from "./styles/Item/ButtonContainer";
import {ListContainer} from "./styles/Item/ListContainer";
import ItemFunc from "./logic/ItemFunc";
import {ITask} from "../../helpers/interfaces";


const Item = ({item, active}: { item: ITask, active: boolean }) => {
    const {changeImportant, displayFormNav, editFormNav, convertedDate} = ItemFunc(item);

    return (<ListContainer>
            <TextContainer onClick={displayFormNav}>
                <TextElement>{item.title}</TextElement>
                <TextElement>{item.description}</TextElement>
                <DateElement>{convertedDate()}</DateElement>
            </TextContainer>

            <ButtonContainer>
                {active && <IconElement name="star" active={item.important} onClick={changeImportant} type="image" src={starIcon}
                              alt="Przycisk Ważne"/>}
                <IconElement name="edit" type="image" onClick={editFormNav} src={editIcon}
                             alt="Przycisk Edycji"/>
                <IconElement name="delete" type="image" src={deleteIcon} alt="Przycisk Usuwania"/>
            </ButtonContainer>
        </ListContainer>
    )
}


export default Item;