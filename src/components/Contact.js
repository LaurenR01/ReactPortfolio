import React from 'react'

export default function Contact() {

    return (
        <div>
            <form>
                <input type="text" size="30" name="ContactName">Name:</input>
                <br></br>
                <input type="text" size="45" name="ContactEmail">Email</input>
                <br></br>
                <input type="textarea" name="ContactComments" rows="6" cols="20">Comments:</input>
                <br></br>
                <br></br>
                <input type="submit" name="SubmitForm" value="Submit"></input>
            </form>
        </div>
    )
}