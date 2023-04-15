// unknown - что то подобное any, но более безопаснее 
function test(value: unknown) {
    if (typeof value === "string") {
        value;
        // ^? (params) value: string
    } else {
        value;
        // ^? (params) value: unknown

    }
}

// пример 1 

interface ISomeComponent {
    text?: string;
}
/**
 * 
 * @param props - компонент принимает в себя какой то пропс, делаем проверку на undefined (ошибку)
 * @returns  - возвращаем tsx формат 
 */

const SomeComponent = (props: ISomeComponent) => {
    if (typeof props.text === "undefined") {
        return null
    }

    const text = props.text
    // ^? const text: string - подхватывает мета информацию, либо же сужаем тип 
    return (
        `<p> 
            Here is the text ${text}
        </p>`
    )
}

// пример 2 

const getSavedName = () => {
    const name = localStorage.getItem("name");
    // ^? const name: string | null
    if (name === null) {
        return null
    }

    name;
    //^? const name: string 

    const parsedName = JSON.parse(name);
    // ^? const parsedName: any
    if (typeof parsedName !== "string") {
        return;
    }

    return parsedName;
    // const parsedName: string
}



//  ===================================================================================

// Кастомные type guards (is)

function isString(value: unknown): value is string {
    return typeof value === "string"
}

function testString(value: unknown) {
    if (isString(value)) {
        return value
        //^? (params) value: string
    } else {
        value
    } // (params) value: unknown
}


//  ===================================================================================


// А можно ли писать type guards на кастомный тип ?
// Пример:

interface IErrorResponse {
    status: number;
    statusText: true;
    message: string;
}
function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null
}

function isIErrorResponse(value: unknown): value is IErrorResponse {
    if (!isObject(value)) {
        return false
    }

    if ("status" in value &&
        typeof value.status === "number" &&
        "statusText" in value &&
        typeof value.statusText === "string" &&
        "message" in value &&
        typeof value.statusText === "string") {

    } {
        return true
    }
    return false;

}

function SubmitForm() {
    try {
        // пишем какой то запрос
    } catch (error) {
        // обрабатываем ошибку 
        if (isIErrorResponse(error)) {
            error
            // ?^ error: IErrorResponse
            // Alert.open({type: 'error', message: error.message})
        }
    }
}
//  ===================================================================================
// Type assertions

// Пример:

function assertString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error(`${value} is be string`)
    }
}

function connectToDb(value: unknown) {
    assertString(value)

    value // если не указывать assert то функция возвращает unknown
}


//  ===================================================================================


// Работа с кастомными типами 

interface Options {
    a: number;
    b: string;
}

function assertOptions(value: unknown): asserts value is Options {
    if (value === null || typeof value !== "object") {
        throw new Error("Invalid options")
    }

    if (!("a" in value) || typeof value.a !== "number") {
        throw new Error("options.a must be a string")
    }
    if (!("b" in value) || typeof value.a !== "string") {
        throw new Error("options.a must be a string")
    }
}

function doSomething(value: unknown) {
    assertOptions(value)
    value;
}