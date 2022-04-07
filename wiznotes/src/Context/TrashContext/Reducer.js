export const Reducer = (trashState, trashAction) => {
    switch(trashAction.type) {
        case "ADD_TRASH": return {...trashState, trashItems: [...trashState.trashItems, trashAction.payload]}
        case "DELETE_TRASH": return {...trashState, trashItems: trashState.trashItems.filter(item=>item._id!==trashAction.payload)}
        default: return trashState
    }
}