# Decisions for the team

Open choices to take before an audience plays the game through Twitch chat.
Each entry gives the behaviour today, the options with their consequences, and a recommendation.
"Today" describes the code on 15 November 2026. The recommendations are proposals, not decisions.

The repository holds three versions of the game:

- **2D game**: `index.html` at the root.
- **3D demo**: `261113Demo.html` at the root.
- **Tiny Gridlock**: the folder `diorama/`.

None of them connects to Twitch today. Each takes commands only from the chat box on its page.

## Already decided

These two are settled for Tiny Gridlock (15 November 2026). The team can reopen them.

- **Replies in Twitch chat.** The game answers in Twitch chat, not only on the screen. This needs
  a Twitch account that may write in the channel, and its login token.
- **Giving up.** Viewers cannot start the solution replay. The streamer starts it, after asking
  the audience. The `solve` command from Twitch chat does nothing.
  Not decided with it: today any viewer can end a running replay with `stop` (see decision 5).

## 1. How many players act at once

- **Today:** every message applies at once, in the order of arrival. No limit per player.
- **Options:**
  - **A. Keep it.** Simple and fast. One player can send many moves and undo the work of others.
  - **B. Cooldown per player**, for example one move every 3 seconds. Everyone gets a turn.
    Play is slower with few players.
  - **C. Vote.** The game collects messages for some seconds and plays the most frequent move.
    Fair with a large audience. Slow: a 20-move puzzle with 8-second rounds takes about 3 minutes
    at the least. A vote needs a timer and a tally on the screen.
- **Recommendation:** B for a class-sized audience. C only for a large audience.

## 2. Which version the audience plays

- **Today:** three versions with different rules (see decision 3).
- **Options:**
  - **A. One version for the presentation.** The audience learns one set of commands.
  - **B. Several versions**, for example to show the development. Each one needs the Twitch
    connection and the same rules, or the players get confused.
- **Recommendation:** A.

## 3. One set of rules

The versions disagree. The audience needs one set, also when only one version is played, because
the README and the slides must match the game.

| Rule                         | 2D game                           | 3D demo                 | Tiny Gridlock                   |
| ---------------------------- | --------------------------------- | ----------------------- | ------------------------------- |
| How to win                   | `clear`, when the path is open    | `red right` at the edge | `red right` at the edge         |
| The exit input counts a move | no                                | yes                     | yes                             |
| `hint`                       | no                                | yes                     | yes                             |
| Several cells, `blue right 3` | no                                | no                      | yes, 1 to 7, each cell one move |
| Levels                       | Normal 6×6, Hard 8×8              | Easy, Normal, Hard, Expert | Easy, Normal, Hard, Expert, Auto |
| Shortest solution, in moves  | not set                           | Easy 4-10, Normal 11-25, Hard 26-45, Expert 46-99 | Easy 12-20, Normal 28-44, Hard 55-85, Expert 100-160 |
| Board size                   | 6×6 and 8×8                       | Easy and Normal 6×6, Hard and Expert 8×8 | Easy and Normal 6×6, Hard 7×7, Expert 8×8 |
| Colour names                 | Hard uses teal, navy, gold, coral | 12 names                | the same 12 names as the 3D demo |

- **Recommendation:** the rules of the 3D demo and Tiny Gridlock: `red right` to exit, `hint`
  allowed. The level names are the same in both, but the puzzle lengths and the Hard board
  differ: state the numbers of the version that is played. Decide `blue right 3` separately: it saves messages, and with a vote (decision 1)
  it splits the votes between `blue right` and `blue right 3`.

## 4. Who may ask for a hint

- **Today:** any viewer, without limit. A hint shows the next move of a shortest solution. On the
  Auto level, many hints make the next puzzle easier.
- **Options:**
  - **A. Keep it.** One viewer can ask for a hint before every move, and the puzzle solves itself.
  - **B. Limit the hints**, for example 3 for each puzzle, or one each 30 seconds.
  - **C. Streamer only**, the same rule as giving up.
- **Recommendation:** B.

## 5. Who controls the puzzle and the camera

- **Today in Tiny Gridlock:** only the streamer can reset, take a new puzzle or change the level
  (buttons). Any viewer can change the camera for everyone with `cam top`, `cam low` or
  `cam angle`. Any viewer can end a running solution replay with `stop`.
- **Options:**
  - **A. Keep it.**
  - **B. Camera and `stop` for the streamer only.** A viewer cannot disturb the view of the
    others or end the replay that the streamer started.
  - **C. Let chat vote** on a reset or a new puzzle.
- **Recommendation:** B.

## 6. Where the audience watches

- **Today:** not decided. A Twitch stream reaches viewers some seconds late.
- **Options:**
  - **A. The room display** (projector). No delay. Twitch is only the input. Works for the
    presentation in class.
  - **B. The Twitch stream.** Works for remote players. They react to an old board, so moves
    arrive late and twice. A cooldown or a vote (decision 1) reduces the harm.
- **Recommendation:** A in class. If remote players join, take B or C in decision 1.

## 7. The Twitch channel and the reply account

- **Today:** no channel is named anywhere.
- **Decide:**
  - Whose Twitch channel the audience writes in.
  - Which account sends the replies: the streamer's account or a separate bot account. The token
    of that account stays on the streamer's laptop and never goes into the repository.
  - Which messages get a reply. Twitch limits the messages an account may send in a period;
    check the current limit in the Twitch developer documentation before the presentation. A
    reply to every invalid command can reach the limit in a busy chat.
- **Recommendation:** a separate bot account, with moderator rights in the channel. Reply to hints,
  to the win and to errors of a player at most once in some seconds; show the rest only on the
  screen.

## 8. Difficulty during the presentation

- **Today in Tiny Gridlock:** the streamer picks Easy, Normal, Hard, Expert or Auto. Auto picks
  each puzzle from the result of the last one.
- **Options:**
  - **A. Auto.** It shows the adaptive part of the project. The first puzzles are easy.
  - **B. A fixed level.** The length is easier to plan: Easy is 12 to 20 moves, Expert 100 to 160.
- **Recommendation:** A, with a time limit for each puzzle that the streamer keeps by hand.

## 9. Where the game runs

- **Today:** Tiny Gridlock runs from a local server on the streamer's laptop. GitHub Pages
  publishes the `main` branch without a build step, so it cannot serve Tiny Gridlock as it is.
- **Options:**
  - **A. The streamer's laptop only.** Nothing to set up. Other machines on the same network
    can open the game from that laptop (`bun serve.js 0.0.0.0 8000`), but not people elsewhere.
  - **B. GitHub Pages too.** Everyone can open the game. It needs a build step in the repository,
    and the Twitch token must stay out of the published page.
- **Recommendation:** A for the presentation. B only if people must open the game on their own.

## 10. Message format

- **Today:** a command is the whole message, without a prefix: `blue right`. A message that is no
  command gets "Invalid command". After a win, and during or after a solution replay, every
  message gets a reply such as "Already cleared. Reset or start a new puzzle." The reply rule of
  decision 7 must cover these replies too.
- **Options:**
  - **A. No prefix.** Short to type. Normal talk in chat counts as invalid commands.
  - **B. A prefix**, `!blue right`, the common form for Twitch commands. Talk is ignored without
    an error. One more character for each move.
  - **C. No prefix, and ignore silently** every message that does not start with a colour name
    or a command word. A typing error such as `bleu right` gets no reply, so the player does not
    know that the move was dropped. Talk that starts with a colour name, such as "red is stuck",
    still gets an error.
- **Recommendation:** C.
