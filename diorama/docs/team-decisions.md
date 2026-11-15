# Decisions for the team

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
- **Decided (15 November 2026):** B, a cooldown per player. The length of the cooldown is not
  set yet. The team can reopen this.

## 2. Who may ask for a hint or give up

- **Today:** any viewer, without limit. `hint` shows the next move of a shortest solution.
  `solve` gives up: the game plays the rest of the shortest solution. On the Auto level, hints
  and a give-up make the next puzzle easier.
- **Options:**
  - **A. Keep it.** One viewer can ask for a hint before every move, and the puzzle solves itself.
  - **B. Limit the hints**, for example 3 for each puzzle, or one each 30 seconds.
  - **C. Streamer only.**
  - **D. Vote.** The audience decides by a vote, such as a Twitch poll.
- **Recommendation:** B.
- **Decided (15 November 2026):** C, streamers only. The streamers ask the audience directly,
  then ask for the hint or start the solution replay themselves. The `hint` and `solve` commands
  from Twitch chat do nothing. The team can reopen this.
- **Why not a Twitch poll (D):** Twitch allows polls only on Partner and Affiliate channels
  ([Twitch developer documentation](https://dev.twitch.tv/docs/api/polls/), read 15 November
  2026). A new channel is neither.

## 3. Who controls the puzzle and the camera

- **Today in Tiny Gridlock:** only the streamer can reset, take a new puzzle or change the level
  (buttons). Any viewer can change the camera for everyone with `cam top`, `cam low` or
  `cam angle`. Any viewer can end a running solution replay with `stop`.
- **Options:**
  - **A. Keep it.**
  - **B. Camera and `stop` for the streamer only.** A viewer cannot disturb the view of the
    others or end the replay that the streamer started.
  - **C. Let chat vote** on a reset or a new puzzle.
- **Recommendation:** B.
- **Decided (15 November 2026):** B. Only the streamers change the camera and end a replay.
  The `cam` and `stop` commands from Twitch chat do nothing. The team can reopen this.

## 4. The Twitch channel and the reply account

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

## 5. Message format

- **Today:** a command is the whole message, without a prefix: `blue right`. A message that is no
  command gets "Invalid command". After a win, and during or after a solution replay, every
  message gets a reply such as "Already cleared. Reset or start a new puzzle." The reply rule of
  decision 4 must cover these replies too.
- **Options:**
  - **A. No prefix.** Short to type. Normal talk in chat counts as invalid commands.
  - **B. A prefix**, `!blue right`, the common form for Twitch commands. Talk is ignored without
    an error. One more character for each move.
  - **C. No prefix, and ignore silently** every message that does not start with a colour name
    or a command word. A typing error such as `bleu right` gets no reply, so the player does not
    know that the move was dropped. Talk that starts with a colour name, such as "red is stuck",
    still gets an error.
- **Recommendation:** C.
- **Decided (15 November 2026):** B, a prefix: `!blue right`. A message without `!` is talk and
  gets no reply. The team can reopen this.
