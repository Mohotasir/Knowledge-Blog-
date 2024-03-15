import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className="pt-4 pb-2 mb-4 flex justify-between border-dotted border-b-2">
            <h2 className="font-bold text-4xl text-pink-800">Knowledge caffe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;