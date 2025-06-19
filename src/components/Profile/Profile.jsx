import './Profile.css';
import Sidebar from '../Sidebar/Sidebar';
import ClothesSection from '../ClothesSection/ClothesSection';

export default function Profile({ onCardClick }) {

    return(
        <div className="profile">
            <section className="profile__sidebar">
                <Sidebar />
            </section>
            <section className="profile__clothing-items">
                <ClothesSection onCardClick={onCardClick} />
            </section>
        </div>
    )
}