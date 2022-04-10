export function* workerSaga(){

}

export function* watchClickSaga(){
  console.log('request 1')
}

export default function* rootSaga(){
  yield watchClickSaga();
}