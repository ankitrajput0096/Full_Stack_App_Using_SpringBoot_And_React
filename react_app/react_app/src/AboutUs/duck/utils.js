function constructPostBody(id, name, desc) {
    return {
        id,
        name,
        description: desc
    }
}

export default {
    constructPostBody,
};