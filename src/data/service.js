import Training from "./Training";

const API_BASE_URL = "https://api.myjson.com/bins/1gwnal"

export const loadTrainingSessions = () => (
    fetch(API_BASE_URL)
        .then(response => response.json())
        .then(trainingSessionsRaw => {
            const trainingSessions = trainingSessionsRaw.map(element => new Training(element.timestamp, element.steps))
            return trainingSessions
        }).then(trainingSessions => {
            let trainingsByDay = {}
            for (let trainingSessionIndex = 0; trainingSessionIndex < trainingSessions.length; trainingSessionIndex++) {
                const trainingSession = trainingSessions[trainingSessionIndex]
                const trainingDate = trainingSession.getDate()
                if (!(trainingDate in trainingsByDay)) {
                    trainingsByDay[trainingDate] = []
                }
                trainingsByDay[trainingDate].push(trainingSession)
            }
            return trainingsByDay
        })
)
