import contacts from "../data/contacts.json"
import {
    Container,
    HeaderContainer,
    ImageView,
    Items,
    TextItems,
    TextView
} from "../components/styled/ContactsComponents";
export default function ContactsScreen(){
    return (
        <Container
            sections={contacts}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <Items>
                    <ImageView source={require("../assets/image/user (1).png" )}/>
                    <TextItems>{item}</TextItems>
                </Items>
            )}

            renderSectionHeader={({section: {title}}) => (
               <HeaderContainer>
                    <TextView>{title}</TextView>
               </HeaderContainer>
            )}
        />
    )
}

