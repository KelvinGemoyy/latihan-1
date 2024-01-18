'use client';

const ViewUserButton = () => {
    const handleClick = () => alert('Aku di klik');

    return (
        <>
        <button onClick={handleClick}>Lihat User</button>
        </>
    )
}

export default ViewUserButton