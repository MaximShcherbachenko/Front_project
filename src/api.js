const url = "https://murmuring-bastion-53509.herokuapp.com";
export const getCeils = async (setTable, setLength) => {
    try {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const res = JSON.parse(xhr.response);
                setTable(res);
                setLength(Math.sqrt(res.length));
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    } catch (error) {
        console.log(error);
    }
};
const setCeilUrlGenerator = (id, color) => url + `?id=${id}&color=${color}`.replace("#", "%23");
export const setCeil = async (id, color) => {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", setCeilUrlGenerator(id, color), true);
        xhr.send(null);
    } catch (error) {
        console.log(error);
    }
};
