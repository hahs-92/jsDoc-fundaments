
/**
 * @description class to create a Programmer
 * @example
 * const programer1 =  new Programmer({id: 2, name: "Jess",age: 25, isActive: true}, "Python")
 * programer1.getInfo()
 *
 * @see https://hahsportfolio.web.app/
 * @todo Implement setter and getter methods
 */
class Programmer {
    /**
     *
     * @param {User} user
     * @param {string} language
     */
    constructor(user, language) {
        this.name = user.name
        this.age = user.age
        this.isActive = user.isActive
        this.language = language
    }

    /**
     * @returns {void}
     */
    getInfo() {
        console.log(`I am ${this.name}, and my favorite language is ${this.language}`)

    }

}


/**
 * Know more in {@link Programmer}
 */
const programer1 =  new Programmer({id: 2, name: "Jess",age: 25, isActive: true}, "Python")

programer1.getInfo()