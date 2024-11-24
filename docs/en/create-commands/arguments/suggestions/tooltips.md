---
order: 5
authors:
- DerEchtePilz
- willkroboth
- JorelAli
---

# Suggestions with tooltips

![A /warp command with suggestions of various locations. Hovering over the suggestions with the mouse cursor displays tooltips describing what the locations are](/images/warps.gif)

The CommandAPI can also display tooltips for specific argument suggestions. These are shown to the user when they hover over a given suggestion and can be used to provide more context to a user about the suggestions that are shown to them. In this section, we'll outline the two ways of creating suggestions with tooltips:

- Normal (String) suggestions with tooltips
- Safely typed suggestions with tooltips

Tooltips _can_ have formatting to change how the text is displayed by using the `ChatColor` class.

## Tooltips with normal (String-based) suggestions

To use these features, the CommandAPI includes the `stringsWithTooltips` methods for arguments, that accept `IStringTooltip` objects instead of `String` objects:

```java
ArgumentSuggestions stringsWithTooltips(IStringTooltip... suggestions);
ArgumentSuggestions stringsWithTooltips(Function<SuggestionInfo, IStringTooltip[]> suggestions);
```

The `StringTooltip` class is the CommandAPI's default implementation of `IStringTooltip`, which has some static methods to construct tooltips easily:

```java
StringTooltip none(String suggestion);
StringTooltip ofString(String suggestion, String tooltip);
StringTooltip ofMessage(String suggestion, Message tooltip);
StringTooltip ofBaseComponents(String suggestion, BaseComponent... tooltip);
StringTooltip ofAdventureComponent(String suggestion, Component tooltip);
```

The first method, `StringTooltip.none(String)` creates a normal suggestion entry with no tooltip. The other methods create a suggestion with the provided tooltip text in either `String`, Brigadier `Message`, Spigot `BaseComponent[]` or Adventure `Component` format.

> [!TIP] Example - An emotes command with string suggestion tooltips
>
> Say we want to create a simple command to provide in-game emotes between players. For example, if you did `/emote wave Bob`, you'll "wave" to the player _Bob_. For this example, we'll use the following command syntax:
>
> ```mccmd
> /emote <emote> <target>
> ```
>
> First, we'll declare our arguments. Here, we'll use the `stringsWithTooltips` method, along with the `StringTooltip.ofString(String, String)` method to create emote suggestions and include suitable descriptions:
>
> :::tabs
> ===Java
> ```java
> // todo {{#include ../../commandapi-documentation-code/src/main/java/dev/jorel/commandapi/examples/java/Examples.java:tooltips1}}
> ```
> ===Kotlin
> ```kotlin
> // todo {{#include ../../commandapi-documentation-code/src/main/kotlin/dev/jorel/commandapi/examples/kotlin/Examples.kt:tooltips1}}
> ```
> :::
>
> Finally, we declare our command as normal:
>
> :::tabs
> ===Java
> ```java
> // todo {{#include ../../commandapi-documentation-code/src/main/java/dev/jorel/commandapi/examples/java/Examples.java:tooltips2}}
> ```
> ===Kotlin
> ```kotlin
> // todo {{#include ../../commandapi-documentation-code/src/main/kotlin/dev/jorel/commandapi/examples/kotlin/Examples.kt:tooltips2}}
> ```
> :::
>

## Using `IStringTooltip` directly

The `IStringTooltip` interface can be implemented by any other class to provide tooltips for custom objects. The `IStringTooltip` interface has the following methods:

```java
public interface IStringTooltip {
    public String getSuggestion();
    public Message getTooltip();
}
```

> Note that the `Message` class is from the Brigadier library, which you will have to add as a dependency to your plugin. Information on how to do that can be found [here](https://github.com/Mojang/brigadier#installation).

This is incredibly useful if you are using suggestions with custom objects, such as a plugin that has custom items.

> [!TIP] Example - Using <code>IStringTooltip</code> for custom items
>
> Let's say we've created a simple plugin which has custom items. For a custom item, we'll have a simple class `CustomItem` that sets its name, lore and attached itemstack:
>
> :::tabs
> ===Java
> ```java
> // todo public {{#include ../../commandapi-documentation-code/src/main/java/dev/jorel/commandapi/examples/java/Examples.java:tooltips3}}
> ```
> ===Kotlin
> ```kotlin
> // todo {{#include ../../commandapi-documentation-code/src/main/kotlin/dev/jorel/commandapi/examples/kotlin/Examples.kt:tooltips3}}
> ```
> :::
>
> We make use of the `Tooltip.messageFromString()` method to generate a Brigadier `Message` object from our string tooltip.
>
> Let's also say that our plugin has registered lots of `CustomItem`s and has this stored in a `CustomItem[]` in our plugin. We could then use this as our input for suggestions:
>
> :::tabs
> ===Java
> ```java
> // todo {{#include ../../commandapi-documentation-code/src/main/java/dev/jorel/commandapi/examples/java/Examples.java:tooltips4}}
> ```
> ===Kotlin
> ```kotlin
> // todo {{#include ../../commandapi-documentation-code/src/main/kotlin/dev/jorel/commandapi/examples/kotlin/Examples.kt:tooltips4}}
> ```
> :::
>

## Tooltips with safe suggestions

Using tooltips with safe suggestions is almost identical to the method described above for normal suggestions, except for two things. Firstly, you must use `tooltips` method instead of the `stringsWithTooltips` method and secondly, instead of using `StringTooltip`, you must use `Tooltip<S>`. Let's look at these differences in more detail.

The `tooltips` methods are fairly similar to the `stringsWithTooltips` methods, except instead of using `StringTooltip`, it simply uses `Tooltip<S>`:

```java
SafeSuggestions<T> tooltips(Tooltip<T>... suggestions);
SafeSuggestions<T> tooltips(Function<SuggestionInfo, Tooltip<T>[]> suggestions);
```

The `Tooltip<S>` class represents a tooltip for a given object `S`. For example, a tooltip for a `LocationArgument` would be a `Tooltip<Location>` and a tooltip for an `EnchantmentArgument` would be a `Tooltip<Enchantment>`.

Just like the `StringTooltip` class, the `Tooltip<S>` class provides the following static methods, which operate exactly the same as the ones in the `StringTooltip` class:

```java
Tooltip<S> none(S object);
Tooltip<S> ofString(S object, String tooltip);
Tooltip<S> ofMessage(S object, Message tooltip);
Tooltip<S> ofBaseComponents(S object, BaseComponent... tooltip);
Tooltip<S> ofAdventureComponent(S object, Component tooltip);

Tooltip<S>[] arrayOf(Tooltip<S>... tooltips);
```

The use of `arrayOf` is heavily recommended as it provides the necessary type safety for Java code to ensure that the correct types are being passed to the `tooltips` method.

> [!TIP] Example - Teleportation command with suggestion descriptions
>
> Say we wanted to create a custom teleport command which suggestions a few key locations. In this example, we'll use the following command syntax:
>
> ```mccmd
> /warp <location>
> ```
>
> First, we'll declare our arguments. Here, we use a `LocationArgument` and use the `tooltips` method, with a parameter for the command sender, so we can get information about the world. We populate the suggestions with tooltips using `Tooltip.ofString(Location, String)` and collate them together with `Tooltip.arrayOf(Tooltip<Location>...)`:
>
> :::tabs
> ===Java
> ```java
> // todo {{#include ../../commandapi-documentation-code/src/main/java/dev/jorel/commandapi/examples/java/Examples.java:tooltips5}}
> ```
> ===Kotlin
> ```kotlin
> // todo {{#include ../../commandapi-documentation-code/src/main/kotlin/dev/jorel/commandapi/examples/kotlin/Examples.kt:tooltips5}}
> ```
> :::
>
> In the arguments declaration, we've casted the command sender to a player. To ensure that the command sender is definitely a player, we'll use the `executesPlayer` command execution method in our command declaration:
>
> :::tabs
> ===Java
> ```java
> // todo {{#include ../../commandapi-documentation-code/src/main/java/dev/jorel/commandapi/examples/java/Examples.java:tooltips6}}
> ```
> ===Kotlin
> ```kotlin
> // todo {{#include ../../commandapi-documentation-code/src/main/kotlin/dev/jorel/commandapi/examples/kotlin/Examples.kt:tooltips6}}
> ```
> :::