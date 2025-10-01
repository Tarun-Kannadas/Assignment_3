function checkDetails()
{
    const Nname = document.getElementById('Name').value.trim()
    const PhnNum = document.getElementById('PhnNum').value.trim()
    const Mailid = document.getElementById('mailid').value.trim()
    const Loc = document.getElementById('loc').value.trim()
    const warning = document.getElementById('warning')

    if (!Nname || !PhnNum || !Mailid || !Loc)
    {
        warning.innerHTML = "Please enter all the details before submitting!"
        return false
    }
    else
    {
        alert("Form has been submitted")
        return true
    }
}