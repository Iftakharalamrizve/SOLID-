import FileLogger from "./FileLogger"
import ConsoleLogger from "./ConsoleLogger"
export default class Logger{
    private static fileLoger: FileLogger = new FileLogger
    private static consoleLogger: ConsoleLogger = new ConsoleLogger

    public static info(message: string)
    {
        // this.fileLoger.logInFile(message);
        this.consoleLogger.logInConsole(message);

    }
}