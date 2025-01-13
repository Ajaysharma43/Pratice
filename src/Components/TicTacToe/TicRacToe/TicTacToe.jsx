import Board from "../Board/Board";

const TicTacToe = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-teal-200 to-green-200">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-teal-700 mb-4">Tic Tac Toe</h1>
                <Board />
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">Tap a square to play!</p>
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;
