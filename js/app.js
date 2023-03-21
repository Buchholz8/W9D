//making an array of 10 tweets, aswell as adding use_age
let top_10 = {
    accounts: [
        {
            age: 38,
            tweet: `So cute. Asked my mom out to lunch and she yelled, "Squad-Goals!". I laughed pretty hard before never ever seeing her again.`,
            username: `VancityReynolds`,
            created_at: 09 - 21 - 2015,

        },
        {
            age: 16,
            tweet: `this is just useless`,
            username: `mexcuse_for_<18`,
            created_at: 08 - 11 - 2022,

        },
        {
            age: 29,
            tweet: `A guy in my office is shaking his protein shake and this women poked ehr head around the vorner and said "do I hear margaritassss?"... no Jnaet, it's 10am.`,
            username: `TJKilbride`,
            created_at: 06 - 04 - 2020,

        },
        {
            age: 15,
            tweet: `why does every one have to be so old`,
            username: `yougin`,
            created_at: 04 - 29 - 2021,

        },
        {
            age: 22,
            tweet: `I wish crackheads had snapchats i'd watch their stories`,
            username: `stayfrea_`,
            created_at: 12 - 23 - 2019,

        },
        {
            age: 32,
            tweet: `made the mistake of offering a solution to the problem that my wife spent 20 minutes describing in great detail`,
            username: `raouvila`,
            created_at: 05 - 10 - 2023,

        },
        {
            age: 47,
            tweet: `my son needs help with his algebra homeowrk so i snuck out the back door and started a new life in costa rica`,
            username: `KimmyMonte`,
            created_at: 01 - 01 - 2020,

        },
        {
            age: 29,
            tweet: `My wife wanted two kittens but i am the man in the house so we got two kittens`,
            username: `JustinGuarini`,
            created_at: 11 - 21 - 2015,

        },
        {
            age: 26,
            tweet: `After this week, if i dont get an "I survived spring break" t-shirt, I'm going to be pissed.`,
            username: `OutNumbMother`,
            created_at: 02 - 24 - 2024,

        },
        {
            age: 16,
            tweet: `whats that mouse called from stuart little`,
            username: `erectums`,
            created_at: 07 - 20 - 2020,

        }
    ]
};
//setting the counter to 0
let counter = 0;
//the start of the while loop witht he counter and the path that i want to loop
while (counter < top_10[`accounts`].length) {
//i tried to set the path for the age restrictions but i cant get them to work
    if (top_10[`accounts`][length][`age`] >= 18) {
        console.log(top_10[`accounts`][counter]);
//an id else for the under 18 (also couldnt get this to work)
    } else if (top_10[`accounts`][length][`age`] < 18) {

        console.log(top_10[`accounts`][counter]);
    }
//making the counter add up each time to stop infinite loops
    counter = counter + 1;
}