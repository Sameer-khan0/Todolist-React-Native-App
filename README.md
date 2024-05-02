## React Native Todo App

This is a simple React Native application for creating and managing a to-do list.

### Features

* Add new tasks with descriptions
* Mark tasks as completed/incomplete
* View a list of all tasks or only incomplete tasks
* Delete tasks

### Getting Started

1. Clone this repository:

   ```bash
   git clone https://your-github-link/react-native-todo-app.git
   ```

2. Install dependencies:

   ```bash
   cd react-native-todo-app
   npm install
   ```

3. (Optional) Install Android Studio or a similar IDE for development.

4. Run the app on Android or iOS:

   * **Android:**

     ```bash
     npx react-native run-android
     ```

   * **iOS:**

     * Ensure you have Xcode and the CocoaPods dependency manager installed.
     * Run `pod install` in the `ios` directory to install iOS dependencies.
     * Run `npx react-native run-ios` to launch the app on a simulator.

### Usage

The app consists of two main screens:

* **All Tasks:** This screen displays a list of all tasks, including completed and incomplete ones.
* **Incomplete Tasks:** This screen displays only tasks that are marked as incomplete.

You can add new tasks by tapping the "+" button on the top right corner of either screen. A modal will appear where you can enter the task description and submit it.

Tap on a task to mark it as completed or incomplete. Completed tasks will be displayed with a checkmark.

Long press on a task to bring up a menu with a "Delete" option. You can confirm deletion to remove the task from the list.


### Contributing

Feel free to fork this repository and submit pull requests with your improvements or new features!
