package annotations;

import dev.jorel.commandapi.CommandAPI;
import dev.jorel.commandapi.CommandAPICommand;
import dev.jorel.commandapi.annotations.Command;
import dev.jorel.commandapi.annotations.Default;
import dev.jorel.commandapi.annotations.Permission;
import dev.jorel.commandapi.annotations.Subcommand;
import dev.jorel.commandapi.annotations.arguments.AStringArgument;
import dev.jorel.commandapi.arguments.ArgumentSuggestions;
import dev.jorel.commandapi.arguments.StringArgument;
import org.bukkit.Location;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import java.util.HashMap;
import java.util.Map;

class Intro {
    {
        // #region legacyExample
        Map<String, Location> warps = new HashMap<>();

        // /warp
        new CommandAPICommand("warp")
            .executes((sender, args) -> {
                sender.sendMessage("--- Warp help ---");
                sender.sendMessage("/warp - Show this help");
                sender.sendMessage("/warp <warp> - Teleport to <warp>");
                sender.sendMessage("/warp create <warpname> - Creates a warp at your current location");
            })
            .register();

        // /warp <warp>
        new CommandAPICommand("warp")
            .withArguments(new StringArgument("warp").replaceSuggestions(ArgumentSuggestions.strings(info ->
                warps.keySet().toArray(new String[0])
            )))
            .executesPlayer((player, args) -> {
                player.teleport(warps.get((String) args.get(0)));
            })
            .register();

        // /warp create <warpname>
        new CommandAPICommand("warp")
            .withSubcommand(
                new CommandAPICommand("create")
                    .withPermission("warps.create")
                    .withArguments(new StringArgument("warpname"))
                    .executesPlayer((player, args) -> {
                        warps.put((String) args.get(0), player.getLocation());
                    })
            )
            .register();
        // #endregion legacyExample

        // #region annotationsRegisterExample
        CommandAPI.registerCommand(WarpCommand.class);
        // #endregion annotationsRegisterExample
    }

    // #region annotationsExample
    // #region declareCommand
    @Command("warp")
    public class WarpCommand {
    // #endregion declareCommand
        // List of warp names and their locations
        static Map<String, Location> warps = new HashMap<>();

        // #region defaultExample
        @Default
        public static void warp(CommandSender sender) {
            sender.sendMessage("--- Warp help ---");
            sender.sendMessage("/warp - Show this help");
            sender.sendMessage("/warp <warp> - Teleport to <warp>");
            sender.sendMessage("/warp create <warpname> - Creates a warp at your current location");
        }
        // #endregion defaultExample

        // #region anotherDefaultExample
        @Default
        public static void warp(Player player, @AStringArgument String warpName) {
            player.teleport(warps.get(warpName));
        }
        // #endregion anotherDefaultExample

        // #region subcommandExample
        @Subcommand("create")
        @Permission("warps.create")
        public static void createWarp(Player player, @AStringArgument String warpName) {
            warps.put(warpName, player.getLocation());
        }
        // #endregion subcommandExample
    }
    // #endregion annotationsExample
}
