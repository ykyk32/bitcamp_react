import React from 'react';

const WriteForm = () => {
    return (
        <div>
            <h1>회원등록</h1>
            <form>
                <table>
                    <tr>
                        <label>id</label>
                        <input type="text" value={ id } />
                    </tr>
                    <tr>
                        <label>이름</label>
                        <input type="text" value={ name } />
                    </tr>
                    <tr>
                        <label>비밀번호</label>
                        <input type="password" value={ pwd } />
                    </tr>
                </table>
            
            
            <button type='submit'>등록</button>
                
            </form>
        </div>
    );
};

export default WriteForm;