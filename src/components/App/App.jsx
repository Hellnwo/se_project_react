import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import "./App.css";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteModal from "../DeleteModal/DeleteModal";
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

import { getWeather, filterWeatherData } from "../../utils/weatherAPI";
import { coordinates, APIkey } from "../../utils/constants";
import { getItems, postCard, addCard, deleteCard, addCardLike, removeCardLike, getUserData, updateUserInfo } from "../../utils/api";
import { signup, signin, tokenCheck } from "../../utils/auth";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [CurrentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);

  const navigate = useNavigate();

  const openRegisterModal = () => {
    setActiveModal("sign-up");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(CurrentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = () => {
    setActiveModal("delete-confirm");
  };

  const handleEditProfileClick = () => {
    setActiveModal('change-profile');
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  
  const switchToLoginModal = () => {
    closeActiveModal("")
    setActiveModal('login');
  };

  const switchToSignUpModal = () => {
    closeActiveModal("")
    setActiveModal('sign-up');
  };

  const handleSignOutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  const handleTokenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      tokenCheck(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
  }

  const handleSignIn = ({ email, password }) => {
    signin(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        handleTokenCheck();
      })
      .catch(console.error);
  }

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  }

  const handleCardLike = ({ id, isLiked }) => {
  const token = localStorage.getItem("jwt");
  !isLiked
    ? addCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err))
    : removeCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
  };

  const handleRegisterModalSubmit = ({ email, password, name, avatarUrl }) => {
    signup(email, password, name, avatarUrl)
      .then((data) => {
        console.log(data);
        closeActiveModal();
      })
      .catch(console.error);
  }

  const handleSignInModalSubmit = ({ email, password }) => {
    signin(email, password)
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        getUserData()
        .then((UserData) => {
        setCurrentUser(UserData)
        closeActiveModal()
      });
      setIsLoggedIn(true)
      })
      .catch(console.error);
  }

  const handleEditProfileSubmit = (userData) => {
    updateUserInfo(userData, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res);
        closeActiveModal();
      })
      .catch((error) => console.log(error));
  }

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    postCard({ name, weather, imageUrl })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteBtn = (id) => {
    deleteCard(id)
      .then(() => {
        setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== id)
      );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    handleTokenCheck();
  }, [])

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

    const ProtectedRoute = ({ isloggedIn, children }) => {
   return isloggedIn ? children : <Navigate to="/" />;
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ CurrentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn, handleSignOut }}>
      <div className="page">
        <div className="page__content">
          <Header 
          handleAddClick={handleAddClick} 
          weatherData={weatherData}
          username={currentUser?.name}
          isLoggedIn={isLoggedIn}
          handleRegisterClick={openRegisterModal}
          handleLoginClick={openLoginModal} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  handleCardLike={handleCardLike}
                  clothingItems={clothingItems}
                  onSignIn={handleSignIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isloggedIn={isLoggedIn}>
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                  username={currentUser?.name}
                  handleCardLike={handleCardLike}
                  handleEditProfileClick={handleEditProfileClick}
                  handleSignOutClick={handleSignOutClick}
                />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          isOpen={activeModal === "preview"}
          handleDeleteClick={handleDeleteClick}
        />
        <DeleteModal 
        onClose={closeActiveModal}
          isOpen={activeModal === "delete-confirm"}
          onDeleteBtn={handleDeleteBtn}
          itemId={selectedCard._id}
        />
        <LoginModal 
        isOpen={activeModal === 'login'} 
        onClose={() => setActiveModal("")} 
        switchToSignUp={switchToSignUpModal} 
        handleSignInModalSubmit={handleSignInModalSubmit} 
        />
          <RegisterModal 
          isOpen={activeModal === 'sign-up'} 
          onClose={() => setActiveModal("")} 
          switchToLogin={switchToLoginModal} 
          onRegisterModalSubmit={handleRegisterModalSubmit}
          />
          <EditProfileModal 
          isOpen={activeModal === 'change-profile'} 
          onClose={closeActiveModal} 
          handleEditProfileSubmit={handleEditProfileSubmit}
          />
      </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
