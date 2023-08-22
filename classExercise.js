function getFullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName; //Option 1
    const fullName2 = `${firstName} ${lastName}`; // Option 2
    // return {
    //     name1: fullName,
    //     name2: fullName2
    // }; // Option 1 to return more than 1 item

    // return [fullName, fullName2] // Option 2 to return more than 1 item

    return fullName;
}

const fname = getFullName("Bijay", "Singh");
console.log(fname);