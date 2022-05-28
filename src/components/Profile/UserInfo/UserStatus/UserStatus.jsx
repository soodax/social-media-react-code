import './UserStatus.scss';
import React, { useState } from 'react';


const UserStatus = ({
    userStatus,
    setUserStatus,
    updateUserStatus,
    currentID,
    isAuth }) => {

    const [editMode, changeMode] = useState(false);

    let onChangeStatus = (e) => {
        setUserStatus(e.currentTarget.value);
    }

    let finishEdit = (e) => {
        changeMode(false)
        updateUserStatus(e.currentTarget.value);
    }

    if (!isAuth && currentID == 23462) {
        return <span>No status</span>
    }

    if (currentID != 23462) {
        return <span>{userStatus != null
            ? userStatus
            : 'No status'}</span>
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={() => changeMode(true)}>{userStatus != null
                        ? userStatus
                        : 'No status'}</span>
                </div>

                : <div>
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={finishEdit} value={userStatus != null
                        ? userStatus
                        : 'No status'} className='input' type="text" />
                </div>
            }
        </div >
    )
}

export default UserStatus