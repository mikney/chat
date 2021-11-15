import React, {FC} from 'react';
import colorAvatarHash from "../../Utils/colorAvatarHash";

interface IAvatar {
  user: {
    _id: any
    avatar?: string
    fullName: string,
    isOnline?: boolean
  }
}

const Avatar: FC <IAvatar> = ({user}) => {
  console.log(user._id)
  if (user.avatar) {
    return (<img
      src={user.avatar}
      alt={`Avatar ${user.fullName}`}
    />)
  } else {
    const colors = colorAvatarHash(user._id)
    const firstCharName = user.fullName[0].toUpperCase()
    return <div className="img" style={{background: `linear-gradient(135deg, ${colors.color} 0%, ${colors.colorLighten} 96.52%)`}}>
      {firstCharName}
    </div>
  }
};

export default Avatar;