# Video Editor

<img src="_static/interface/interface.png" style="margin-bottom:0;" />

<span style="font-size:12px;display:flex;justify-content:center;">Video Editor</span>

## Stage

<img src="_static/interface/stage/stage.png" style="max-width:800px;" />

The **stage** is the area where the 3D biological structure is represented, the **tools bar** allows to apply actions to the stage.

### Tools

The tools menu is at the top left of the **stage** and allows users to make some actions over it.

<img src="_static/interface/stage/tools/tools.png" />

This menu is **draggable** around all the stage and can be **collapsed / expanded** by clicking twice on the handler. For **hiding** it completely, go to _View > Tools_ in the menu. Click in the same menu for **showing** it again.

#### Center

<img src="_static/interface/stage/tools/tools01.png" />

Clicking this button **centers** the structure(s) position on the **stage**. This button is active only if **one single keyframe** of the timeline has been selected.

#### Background

<img src="_static/interface/stage/tools/tools02.png" />

Clicking this button opens a **color picker** that allows users to change the **background color** of the **stage**.

<img src="_static/interface/stage/tools/tools02b.png" />

Click **again** on the button for **hiding** the color picker.

#### Measurements

<img src="_static/interface/stage/tools/tools03.png" />

Clicking this button **opens a modal dialog** to edit the **distances and angles** created by users in the stage. For remembering how to draw them, please go to the [**Mouse click actions section**](#mouse-click-actions).

**Measurements** with size and color **by default**:

<img src="_static/interface/stage/tools/tools03a.png" style="max-width:500px;" />

##### Distances

**Distances** editor before editing size and color:

<img src="_static/interface/stage/tools/tools03b.png" style="max-width:500px;" />

**Distances** editor after editing size and color:

<img src="_static/interface/stage/tools/tools03c.png" style="max-width:525px;" />

If **only a distance** is needed (**without label**), please set **0 as Label siz**e.

##### Angles

**Angles** editor before editing size and color:

<img src="_static/interface/stage/tools/tools03d.png" style="max-width:500px;" />

**Angles** editor after editing size and color:

<img src="_static/interface/stage/tools/tools03e.png" style="max-width:525px;" />

If **only the lines** are needed (**without label**), please set **0 as Label size**.

**Measurements** after **size and color edition**:

<img src="_static/interface/stage/tools/tools03f.png" style="max-width:500px;" />

#### Labels

<img src="_static/interface/stage/tools/tools04.png" />

Clicking this button **opens a modal dialog** to edit the **labels** created by users in the stage. For remembering how to draw them, please go to the [**Mouse click actions section**](#mouse-click-actions).

**Labels** with size, text and color **by default**:

<img src="_static/interface/stage/tools/tools04a.png" style="max-width:500px;" />

**Labels** editor before editing text, size color and background:

<img src="_static/interface/stage/tools/tools04b.png" style="max-width:500px;" />

**Labels** editor after editing text, size color and background:

<img src="_static/interface/stage/tools/tools04c.png" style="max-width:500px;" />

Label **background** can be modified. Moreover, it can be **disabled** as well with the switch beside the background color **selector**.

**Labels** after **size, text and color edition**:

<img src="_static/interface/stage/tools/tools04d.png" style="max-width:500px;" />

#### Camera type

<img src="_static/interface/stage/tools/tools05.png" />

Switches camera type between **orthographic** and **perspective**.

#### Center view in atom

<img src="_static/interface/stage/tools/tools06.png" />

Click this button and then, **select an atom** of the structure, the view will be **focused** into this atom position. This button is active only if **one single keyframe** of the timeline has been selected.

#### Enable / Disable legend

<img src="_static/interface/stage/tools/tools07.png" />

Enables / disables a **legend** on the bottom right of the **stage**. This **legend** shows information for the molecule the mouse has hovered over in the next format:

> Model **number** | Chain **ID** | **Residue name (Residue long name) Residue number** Atom name (or Bond)

<img src="_static/interface/stage/tools/tools07b.png" />

#### Open keyframe editor

<img src="_static/interface/stage/tools/tools08.png" />

Clicking this button **opens a keyframe editor**. 

<img src="_static/interface/stage/tools/tools08b.png" />

In this editor, users can change the **rotation** and **translation** of the biological structure.

This button is active only if **one single keyframe** of the timeline has been selected.

#### Enable / Disable letterboxing

<img src="_static/interface/stage/tools/tools09.png" />

Enables / disables letterboxing on the **stage**. Two **stripes** will appear showing to the user which parts of the stage will be **rendered** and which not in case of **HD rendering**. In some cases (depending on the screen **aspect ratio**) these stripes won’t appear.

<img src="_static/interface/stage/tools/tools09b.png" style="max-width:500px" />

Click **again** on the button for **removing** the stripes from the stage.

### Structure Stage

<img src="_static/interface/stage/stage/stage.png" style="max-width:600px;" />

The **stage** covers the main part of the screen. In the stage the **structure is loaded** and **represented**, and users can interact with it in several ways.

#### Zoom / Drag

Before applying **rotation**, **translation** or **zoom** to the stage, a [**keyframe must be selected in the timeline**](#timeline-editor).

Actions of **zoom in** and **zoom out** can be done with the **scroll mouse or the trackpad** of a laptop, besides, **rotation** and **translation** can be applied as well:

* Clicking on the stage with the **left button** and **dragging will rotate the view**.

* Clicking on the stage with the **right button** and **dragging will translate the view**.

* Mouse wheel (or using the trackpad with two fingers) on the stage will **zoom in** or **zoom out**.

All these modifications in the **general orientation** of the structure will be applied to the **selected keyframe**. That means that, in a **clip**, the **first** and the **last frame** can have different **rotation**, **translation** or **zoom**. **Biomovies** will take care of the **interpolation** between frames.

<img src="_static/interface/stage/stage/stage01.gif" style="margin-bottom:0;" />

<span style="font-size:12px;">Automatic transition between two frames with different orientations</span>

#### Mouse actions

##### Mouse over actions

Passing the mouse over the molecules of the structure will **highlight** them and show **their information** in the **legend** on the bottom right of the stage. [**Click here**](#enable-disable-legend) to see how to enable the legend.

##### Mouse click actions

* Clicking with the mouse **left button** on an atom while pressing the **Alt or ⌥ key** will **place a Label** close to this atom. [**Click here**](#labels) to see how to edit labels.

* Clicking **consecutively on two atoms** with the mouse **left button** will draw and calculate the **distance** in **ångströms** between these two atoms. [**Click here**](#distances) to see how to edit distances.

* Clicking **consecutively on three atoms** with the mouse **right button** while pressing the **Ctrl key** will draw and calculate the **angle** in **degrees** between these three atoms. [**Click here**](#angles) to see how to edit angles.

## Timeline

<img src="_static/interface/timeline/timeline01.png" />

The **Timeline**, placed at the bottom part of the application, allows the users to control and edit the **clips** and the **keyframes** that shape the representation.

### Timer

<img src="_static/interface/timeline/timeline02.png" />

Placed at the top left corner of the **Timeline**, indicates the **exact time** where the cursor is.

### Create new timeline item

<img src="_static/interface/timeline/timeline03.png" />

This menu allows to **create new items** in the timeline:

#### Clip

Creates a **new clip** in the timeline. Note that for creating a new clip an existing one must be selected. The new clip will be added **after this selected clip**. If there is not enough space, the new clip will be added at **the end of the timeline**.

Shortcut: ⌘/Ctrl + ⇧ + C

#### Cloned Clip

Clones an **existing clip** from the timeline. Note that for cloning a new clip an existing one must be **already selected** in order to clone it. The new clip will be added **after this selected clip**. If there is not enough space, the new clip will be added at **the end of the timeline**.

Shortcut: ⌘/Ctrl + ⌥/Alt + C

#### Transition

Creates a **transition between two clips**. Two **consecutive keyframes** of **different clips** with a minimum gap of 400ms between them must be selected before performing this action.

Shortcut: ⌘/Ctrl + ⇧ + T

#### Fade In

Creates a **Fade In transition before a clip**. The **initial keyframe** of the clip must be selected before performing this action. There must be a minimum gap of 480ms between the previous keyframe and the one selected. 

Shortcut: ⌘ + ⇧ + I for **macOS**, Ctrl + Alt + I for **Windows** / **Ubuntu**

#### Fade Out

Creates a **Fade Out transition after a clip**. The **final keyframe** of the clip must be selected before performing this action. There must be a minimum gap of 480ms between the next keyframe and the one selected.

Shortcut: ⌘/Ctrl + ⇧ + O

#### Description

Creates a new **description** in the timeline.

Shortcut: ⌘/Ctrl + ⇧ + D

### Timeline menu

<img src="_static/interface/timeline/timeline04.png" />

In this **menu**, divided into **four areas**, there can be found all the possible actions to apply to the **Timeline**.

#### Remove

<img src="_static/interface/timeline/timeline05.png" />

The remove button allows the user to **remove** the selected **clip** or **transition**. For the sake of security, the button must be **clicked twice**.

#### Timeline controls

<img src="_static/interface/timeline/timeline06.png" />

This submenu has the actions for controlling the **Timeline** area.

##### Reset timeline

<img src="_static/interface/timeline/timeline09.png" />

Clicking this button **resets** the **Timeline editor**: disables the **Pan Mode** (if enabled), resets the **Zoom** to the initial value (if changed) and moves the **cursor** to the beginning.

Shortcut: ⌘/Ctrl + ⌥/Alt + R

##### Pan mode

<img src="_static/interface/timeline/timeline10.png" />

Clicking this button enables / disables the **Pan Mode**, which allows to **drag the whole Timeline editor**.

<img src="_static/interface/timeline/timeline10b.gif" style="max-width:600px" />

Shortcut: ⌘/Ctrl + ⌥/Alt + A

##### Zoom

<img src="_static/interface/timeline/timeline11.png" />

Clicking this button enables / disables the **Zoom Mode**, which allows to **zoom into the Timeline editor**.

<img src="_static/interface/timeline/timeline11b.gif" style="max-width:600px" />

Shortcut: ⌘/Ctrl + ⌥/Alt + Z

Tip: Once the zoom mode is enabled, the **default** zoom type is **Zoom In**. For doing **Zoom Out**, click **⌘/Ctrl**.

#### Keyframes actions

<img src="_static/interface/timeline/timeline07.png" />

This submenu has the actions for controlling the **keyframes** of the **Timeline**.

##### Align last keyframe

<img src="_static/interface/timeline/timeline12.png" />

Only works with **two keyframes** selected: aligns the **last** keyframe of the selection with the **first** one.

Shortcut: ⌘/Ctrl + ⌥/Alt + ⇧ + ◄ / Left for **macOS** / **Windows**, Ctrl + Left for **Ubuntu**

##### Align first keyframe

<img src="_static/interface/timeline/timeline13.png" />

Only works with **two keyframes** selected: aligns the **firstt** keyframe of the selection with the **las** one.

Shortcut: ⌘/Ctrl + ⌥/Alt + ⇧ + ► / Right for **macOS** / **Windows**, Ctrl + Right for **Ubuntu**

##### Select all keyframes

<img src="_static/interface/timeline/timeline14.png" />

Clicking this button select **all the keyframes of the Timeline editor**.

Shortcut: ⌘/Ctrl + ⇧ + K

##### Move keyframes left

<img src="_static/interface/timeline/timeline15.png" />

Only works with **two or more keyframes** selected: moves **all the selected keyframes to left** in the **Timeline editor**.

<img src="_static/interface/timeline/timeline15b.gif" style="max-width:600px" />

Shortcut: ⌘/Ctrl + ⇧ + ◄ / Left

##### Move keyframes right

<img src="_static/interface/timeline/timeline16.png" />

Only works with **two or more keyframes** selected: moves **all the selected keyframes to right** in the **Timeline editor**.

<img src="_static/interface/timeline/timeline16b.gif" style="max-width:600px" />

Shortcut: ⌘/Ctrl + ⇧ + ► / Right

#### Player

<img src="_static/interface/timeline/timeline08.png" />

This submenu has the actions for controlling the **cursor** of the **Timeline**.

##### Go to first frame

<img src="_static/interface/timeline/timeline17.png" />

Clicking this button moves the **cursor** to the **first frame** of the **Timeline**.

Shortcut: ⇧ + ▲ / Up

##### Go to previous frame

<img src="_static/interface/timeline/timeline18.png" />

Clicking this button moves the **cursor** to the **previous frame** in the **Timeline**.

Shortcut: ⇧ + ◄ / Left

##### Play / Pause

<img src="_static/interface/timeline/timeline19.png" />

Clicing this button **plays / pauses the Timeline**.

##### Go to next frame

<img src="_static/interface/timeline/timeline20.png" />

Clicking this button moves the **cursor** to the **next frame** in the **Timeline**.

Shortcut: ⇧ + ► / Right

##### Go to last frame

<img src="_static/interface/timeline/timeline21.png" />

Clicking this button moves the **cursor** to the **last frame** of the **Timeline**.

Shortcut: ⇧ + ▼ / Down

#### Trajectory frames

<img src="_static/interface/timeline/timeline22.png" />

Only when working with a **trajectory**, this section appears at the top right corner of the **Timeline**. It indicates in the first place the **position of the cursor** and the **total frames** of the trajectory, and in the second place, between brackets, the **range of frames** with which the trajectory will be played. [**Click here**](#range) to see how to select this range in the **Trajectory editor**. So, in the above image, the cursor is in the frame number 3792 of a total of 10000 for the whole trajectory, but only the frames between the 3602 and the 6563 will be played. 

> **Cursor / Total frames** [ initial range frame - final range frame ]

### Main structure

In the first row of the **Timeline**, the **main structure** can be edited creating / modiying new **clips** and **transitions**.

### Descriptions

In the second row of the **Timeline**, **Descriptions** can be introduced. They can be treated and edited **as clips** with their corresponding **keyframes**. 

### Timeline editor

<img src="_static/interface/timeline/timeline23.png" />

The main timeline area or editor, is the place where all the actions related to **Timeline** such as select **clip** / **transition**, **move** them, select **keyframes** and so on.

### Tips

* The timeline **zoom** can also be applied via **scroll mouse** or **trackpad** and pressing the **Ctrl** key at the **same time**. 
* **Multiple keyframes** can be selected just **clicking** and **dragging** over the **Timeline Editor**.

For more tips, see the [**tips section**](utilities.html#tips).

## Representations

The **Representations** panel is located at right of the stage and is used for:

* Changing the **representation** properties of the **structure** [**selecting a clip or a keyframe**](#timeline-editor) in the **Timeline**. That means that **each clip** can have different **representations**.
* Modifying the **settings** of a trajectory for each [**selected clip or keyframe**](#timeline-editor) in the **Timeline**. That means that the **trajectory** can have different **settings** for **each clip**.
* Adjusting the features for each [**selected description text**](#timeline-editor) in the **Timeline**.
 That means that **each description** text can have different **features**.

<div style="display:flex; justify-content:space-evenly;align-items:flex-start;">
<img src="_static/interface/representations/representations01.png" style="margin-bottom:0; max-width:300px;" />
<img src="_static/interface/representations/representations02.png" style="margin-bottom:0; max-width:300px;height:auto;" />
</div>

<div style="display:flex; justify-content:space-evenly;">
<span style="width:300px; font-size:12px;">Representations for clips and Trajectory settings</span>
<span style="width:300px; font-size:12px;">Description settings</span>
</div>

### Keyframes / Clips

<img src="_static/interface/representations/clips/clips01.png" style="max-width:300px;height:auto;" />

When [**selecting a clip or a keyframe**](#timeline-editor) in the **Timeline**, the above **editor** module appears on the **Representations** area.

#### Menu

This menu is **common** for all the representations of the selected **clip**.

##### Create new representation

<img src="_static/interface/representations/clips/clips02.png" />

Clicking this button will create a **new representation** for the **structure** in the **selected clip**.

##### Hide all

<img src="_static/interface/representations/clips/clips03.png" />

Clicking this button will **hide** in the stage **all the representations** for the **structure** in the **selected clip**.

##### Collapse all

<img src="_static/interface/representations/clips/clips04.png" />

Clicking this button will collapse **all the representations editor** modules for the **structure** in the **selected clip**. It doesn't affect the representation.

#### Edit representation

Each time we click the [**Create new representation**](#create-new-representation) a **new representation** is created and, therefore, a new **Edit representation module** is added. Each one of these **representations** are applied to the **selected clip**. For applying **different** representations to a different **clip**, click on this other **clip** in the **Timeline**.

##### Representation menu

<img src="_static/interface/representations/clips/clips05.png" style="max-width:300px" />

The first line of the editor holds several **actions** related with the **representation**.

###### Representation name

<img src="_static/interface/representations/clips/clips06.png" style="max-width:120px" />

Clicking this box allows to **edit the name** of the **representation**.

###### Hide representation

<img src="_static/interface/representations/clips/clips07.png" />

Clicking this button will **hide** this **representation** in the **stage**.

###### Clone representation

<img src="_static/interface/representations/clips/clips08.png" />

Clicking this button will **clone** this **representation**.

###### Center in this representation

<img src="_static/interface/representations/clips/clips09.png" />

Clicking this button will **center** the stage view in the molecules selected in this **representation**.

###### Remove representation

<img src="_static/interface/representations/clips/clips10.png" />

Clicking this button will **remove** completely this **representation**.

###### Collapse representation editor

<img src="_static/interface/representations/clips/clips11.png" />

Clicking this button will collapse this **representation** editor. It doesn't affect the representation.

##### Selection

The **Selections** are used for applying **molecular selections** to the selected **representation**.

###### Standard selection

By default, **Biomovies** provide a list of predefined selections:

* All
* Side Chain
* Side Chain Attached
* Backbone
* Protein
* Nucleic
* RNA
* DNA
* Hetero
* Ligand
* Ion
* Saccharide / Sugar
* Polymer
* Water
* Hydrogen
* Helix
* Sheet
* Turn
* Small
* Nucleophilic
* Hydrophobic
* Aromatic
* Amid
* Acidic
* Basic
* Charged
* Polar
* Non Polar
* Cyclic
* Aliphatic
* Bonded
* Ring

###### Custom selection

Additionally, a **custom selection** is provided as well. When selected, the dropdown menu described below changes to a **new structure**:

<img src="_static/interface/representations/clips/clips12.png" style="max-width:300px" />

The custom selection is divided into three sections:

**Back to standard selection button**

<img src="_static/interface/representations/clips/clips12a.png" />

Clicking this button backs to the **dropdown menu** with the list of **predefined selections**.

**Selection input text**

In this text field, users can add a custom selection written in [**NGL viewer Selection Language**](https://nglviewer.org/ngl/api/manual/usage/selection-language.html). Please visit the [**Selection language section**](https://nglviewer.org/ngl/api/manual/usage/selection-language.html) of the NGL Viewer manual **before starting** with this section.

<img src="_static/interface/representations/clips/clips13.png" style="max-width:600px;margin-bottom:0;" />

<span style="font-size:12px;">Two different chains selected via custom selection</span>

**Distance-based selection button**

<img src="_static/interface/representations/clips/clips12b.png" />

When clicked, gets the atoms that are within a certain distance of the selection. 

<img src="_static/interface/representations/clips/clips15.png" style="max-width:300px"  />

It adds two new fields as well: **Whole residues** and **Distance**.

<img src="_static/interface/representations/clips/clips14.png" style="max-width:600px;margin-bottom:0;" />

<span style="font-size:12px;">Common custom selection: all the molecules of the chain D are represented</span>

When clicking this button, **all the atoms** that are within a certain **distance** of the selection will be given instead of the selection itself.

<img src="_static/interface/representations/clips/clips16.png" style="max-width:600px;margin-bottom:0;" />

<span style="font-size:12px;">Distance-based custom selection: all the <strong>atoms</strong> within a distance of 7Å of the chain D are represented</span>

If the **Whole residues** switch button is enabled, **all the molecules** that have **at least one atom** within a **distance** of the selection will be given instead of the selection itself.

<img src="_static/interface/representations/clips/clips17.png" style="max-width:600px;margin-bottom:0;" />

<span style="font-size:12px;">Distance-based custom selection: all the <strong>molecules</strong> that have at least one atom within a distance of 7Å of the chain D are represented</span>

##### Opacity

Through this slider, the **opacity** of the representation varies. Note that due to an incompatibility of NGL Viewer, opacity in multilayer projects can generate some **issues**. So creating multiple representations with different degrees of opacity can give **non desired outcomes**.

##### Molecular representation

The structure can be displayed using a variety of **molecular representations**:

###### Backbone

Cylinders connect successive residues of unbroken chains by their main backbone atoms, which are **.CA** atoms in case of proteins and **C4’/C3’** atoms for RNA/DNA, respectively. The main backbone atoms are displayed as spheres.

<img src="_static/interface/representations/clips/clips18.png" style="max-width:600px;" />

The **Backbone** representation allows to modify the **radius** of the backbone.

###### Ball and stick

Atoms are displayed as spheres (balls) and bonds as cylinders (sticks).

<img src="_static/interface/representations/clips/clips19.png" style="max-width:600px;" />

The **Ball and stick** representation allows to modify the **radius** of the balls (atoms) and the sticks (bonds).

###### Cartoon

The main backbone atoms (see backbone) of successive residues in unbroken chains are connected by a smooth trace. The trace is expanded perpendicular to its tangent with an elliptical cross-section. The major axis points from **.CA** in the direction of the **.O** in case of proteins and from the **C1’/C3’** to **C2’/O4’** for RNA/DNA, respectively.

<img src="_static/interface/representations/clips/clips20.png" style="max-width:600px;" />

The **Cartoon** representation allows to modify the **radius** of the trace.

Due to a shortcoming of NGL Viewer, the **cartoon** and **ribbon** representations only can show **four or more** consecutive residues.

###### Hyperball

A derivate of the [**ball+stick **](#ball-and-stick) representation (pioneered by [HyperBalls](http://sourceforge.net/projects/hyperballs/) project) in which atoms are smoothly connected by an elliptic hyperboloid.

<img src="_static/interface/representations/clips/clips21.png" style="max-width:600px;" />

###### Licorice

A variant of the [**ball+stick **](#ball-and-stick) representation where balls and sticks have the same radius.

<img src="_static/interface/representations/clips/clips22.png" style="max-width:600px;" />

The **Licorice** representation allows to modify the **radius** of the balls (atoms) and the sticks (bonds).

###### Line

Bonds are displayed by a flat, unshaded line.

<img src="_static/interface/representations/clips/clips23.png" style="max-width:600px;" />

###### Ribbon

A thin ribbon is displayed along the main backbone trace. 

<img src="_static/interface/representations/clips/clips24.png" style="max-width:600px;" />

Due to a shortcoming of NGL Viewer, the **cartoon** and **ribbon** representations only can show **four or more** consecutive residues.

###### Rope

A rope-like protein fold abstraction well suited for coarse-grained structures. In this representation a tube follows the center points of local axes. The result is similar to what is shown by the [Bendix tool](http://sbcb.bioch.ox.ac.uk/Bendix/).

<img src="_static/interface/representations/clips/clips25.png" style="max-width:600px;" />

###### Spacefill

Atoms are displayed as a set of space-filling spheres.

<img src="_static/interface/representations/clips/clips26.png" style="max-width:600px;" />

The **Spacefill** representation allows to modify the **radius** of the spheres.

###### Surface

Displays the molecular surface and its variants.

<img src="_static/interface/representations/clips/clips27.png" style="max-width:600px;" />

###### Trace

A flat, unshaded line is displayed along the main backbone trace.

<img src="_static/interface/representations/clips/clips28.png" style="max-width:600px;" />

###### Tube

Essentially like cartoon but with the aspectRatio fixed at a value of 1.0.

<img src="_static/interface/representations/clips/clips30.png" style="max-width:600px;" />

###### Base

Simplified display of **RNA/DNA nucleotides**, best used in conjunction with a cartoon representation. Here, a stick is drawn connecting the sugar backbone with a nitrogen in the base (**.N1** in case of adenine or guanine, **.N3** in case of thymine or cytosine).

<img src="_static/interface/representations/clips/clips31.png" style="max-width:600px;" />

The **Base** representation allows to modify the **radius** of the sticks.

##### Color scheme

Each loaded structure can be displayed using a variety of **color schemes**:

###### Atom index

Color by atom index.

<img src="_static/interface/representations/clips/clips32.png" style="max-width:600px;" />

###### B-factor

Color by b-factor.

<img src="_static/interface/representations/clips/clips33.png" style="max-width:600px;" />

###### Chain id

Color by chain id.

<img src="_static/interface/representations/clips/clips34.png" style="max-width:600px;" />

###### Chain index

Color by chain index.

<img src="_static/interface/representations/clips/clips35.png" style="max-width:600px;" />

###### Element

Color by chemical element.

<img src="_static/interface/representations/clips/clips36.png" style="max-width:600px;" />

###### Hydrophobicity

Color by hydrophobicity.

<img src="_static/interface/representations/clips/clips37.png" style="max-width:600px;" />

###### Model index

Color by model index.

<img src="_static/interface/representations/clips/clips38.png" style="max-width:600px;" />

###### Random

Class by random color.

<img src="_static/interface/representations/clips/clips39.png" style="max-width:600px;" />

###### Residue index

Color by residue index.

<img src="_static/interface/representations/clips/clips40.png" style="max-width:600px;" />

###### Residue name

Color by residue name.

<img src="_static/interface/representations/clips/clips41.png" style="max-width:600px;" />

###### Secondary structure

Color by secondary structure.

<img src="_static/interface/representations/clips/clips42.png" style="max-width:600px;" />

###### Uniform

Color by uniform color selected from the **color picker** that appears at right of the dropdown menu when this option is selected.

<img src="_static/interface/representations/clips/clips43.png" style="max-width:150px; display:flex;" />

<img src="_static/interface/representations/clips/clips44.png" style="max-width:600px; display:flex;" />

##### Radius

Through this slider, the **radius** can be modified in the next molecular representations:

* Backbone
* Ball and stick
* Cartoon
* Licorice
* Spacefill
* Base

### Trajectories

<img src="_static/interface/representations/trajectories/trajectories01.png" style="max-width:300px;height:auto;" />

When working with a project with a [**topology and a trajectory**](get-started.html#new-project-with-trajectory) and [**selecting a clip or a keyframe**](#timeline-editor) in the **Timeline**, the above **editor** module appears on the **Representations** area. 

By default it's disabled. That means that, when we start a new project with a **trajectory**, this trajectory is not **applied** to the **structure** until the **Play trajectory for this clip** switch button is **enabled**.

#### Enable / Disable trajectory

<img src="_static/interface/representations/trajectories/trajectories02.png" style="max-width:300px;height:auto;" />

When enabling the **Play trajectory for this clip** switch button, the editor **expands** all the **settings**. From now on, the **trajectory** is **active** for the clip selected in the **Timeline** and we can check it by clicking for example the [**Play**](#play-pause) button in the **Timeline**, 

#### Range

Initially set from the first to the last frame of the trajectory, defines a **range of frames** with which the trajectory will be played.

Taking into account that for **long trajectories**, the modification of the range can be annoying, a couple of **features** have been introduced:

* On the one hand, **both of the numbers** at the right top of the range are **editable**. Click on both of them in order to introduce the desired frame.
* On the other hand, **range values** can be adjusted via **keyboard**:
    * ⌘/Ctrl + ⌥/Alt + 1 **decreases initial** frame
    * ⌘/Ctrl + ⌥/Alt + 2 **increases initial** frame
    * ⌘/Ctrl + ⌥/Alt + 3 **decreases final** frame
    * ⌘/Ctrl + ⌥/Alt + 4 **increases final** frame

For more tips, see the [**tips section**](utilities.html#tips). For more shortcuts, see the [**shortcuts section**](utilities.html#shortcuts).

#### Step

Defines the **number of frames** between playing **steps**.

#### Timeout

**Timeout** between playing frames (40ms per unit).

#### Play in reverse

If enabled plays the trajectory **backwards**.

#### Fit clip in timeline

Adjust the selected clip in **Timeline** size with the **trajectory lenght**. Beside the switch button there is a **text** that, dynamically, updates the **number of frames** of the trajectory after modifying the **range** and the **time of the clip** in ms after modifying **step** and / or **timeout**.

### Descriptions

<img src="_static/interface/representations/representations02.png" style="max-width:300px;" />

As explained in the [**Descriptions**](#descriptions) section, users can add **descriptive texts** to the Timeline. Clicking on a [**keyframe or a description**](#timeline-editor) in the Timeline, the above **editor** module appears on the **Representations** area.

<img src="_static/interface/representations/descriptions/descriptions02.png" style="max-width:300px;" />

#### Description text

This text box allows to **edit** the text shown in the **Timeline**.

<img src="_static/interface/representations/descriptions/descriptions03.png" style="max-width:300px;" />

#### Font size

Font **size** of the text shown in the **Timeline**.

<img src="_static/interface/representations/descriptions/descriptions04.png" style="max-width:300px;" />

#### Font family

<img src="_static/interface/representations/descriptions/descriptions01.png" />

Font **family** for the text shown in the **Timeline**. 

<img src="_static/interface/representations/descriptions/descriptions05.png" style="max-width:300px;" />

List of available fonts:

* [Anton <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://fonts.google.com/specimen/Anton)
* [Arial <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://www.cufonfonts.com/font/arial)
* [Avenir <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://fontsgeek.com/avenir-font)
* [Caveat <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://fonts.google.com/specimen/Caveat)
* [Merriweather <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://fonts.google.com/specimen/Merriweather)
* [Quicksand <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://fonts.google.com/specimen/Quicksand)

#### Font Color

Font **color** of the text shown in the **Timeline**.

<img src="_static/interface/representations/descriptions/descriptions06.png" style="max-width:300px;" />

#### Background Color

Background **color** of the text shown in the **Timeline**.

<img src="_static/interface/representations/descriptions/descriptions07.png" style="max-width:300px;" />

#### Background Visibility

Wheter or not to **show** the background of the text shown in the **Timeline**.

<img src="_static/interface/representations/descriptions/descriptions08.png" style="max-width:300px;" />

#### Description position

**Ubication** of the text in the stage. 

<img src="_static/interface/representations/descriptions/descriptions09.png" style="max-width:300px;" />

There is a list of available predefined positions. The **first** parameter is about **vertical** position while the **second** is about the **horizontal** one:

* Top Left <i class="fa-solid fa-chevron-left fa-rotate-by" style="--fa-rotate-angle: 45deg; margin-left: 2px;"></i>
* Top Center <i class="fa-solid fa-t" style="height:10px; overflow:hidden;"></i>
* Top Right <i class="fa-solid fa-chevron-right fa-rotate-by" style="--fa-rotate-angle: -45deg; margin-left: 2px;"></i>
* Middle Left <i class="fa-solid fa-t fa-rotate-270" style="height:10px; overflow:hidden;"></i>
* Middle Center <i class="fa-solid fa-plus"></i>
* Middle Right <i class="fa-solid fa-t fa-rotate-90" style="height:10px; overflow:hidden;"></i>
* Bottom Left <i class="fa-solid fa-chevron-left fa-rotate-by" style="--fa-rotate-angle: -45deg; margin-left: 2px; vertical-align: middle;"></i>
* Bottom Center <i class="fa-solid fa-t fa-flip-vertical" style="height:10px; overflow:hidden;"></i>
* Bottom Right <i class="fa-solid fa-chevron-right fa-rotate-by" style="--fa-rotate-angle: 45deg; margin-left: 2px; vertical-align: middle;"></i>

## Status Bar

<img src="_static/interface/stage/statusbar/statusbar.png" style="margin-bottom:0;" />

<span style="font-size:12px;">Status bar</span>

The **status bar** is at the **bottom** of the application. It can be **enabled** / **disabled** via menu (_View > Status Bar_)

### Tips

<img src="_static/interface/stage/statusbar/statusbar01.png" />

This section of the **status bar** shows **tips** depending on the area of the application where the mouse is located. There are tips for:

* Stage
* Tools
* Controls
* Timeline
* Splitter

### Project status

<img src="_static/interface/stage/statusbar/statusbar02.png" />

This section of the **status bar** shows the current **status** of the project: either the last time it was saved or a prompt warning that the project hasn't been saved yet.

### Version

<img src="_static/interface/stage/statusbar/statusbar03.png" />

This section of the **status bar** shows the current **version** of the application.

### Theme

<img src="_static/interface/stage/statusbar/statusbar04.png" />

Clicking on this section of the **status bar** the application theme will toggle between **dark** and **light**. This option can be toggled as well via menu (_View > Light Theme_ or _View > Dark Theme_)

<img src="_static/interface/stage/statusbar/statusbar05.gif" style="margin-bottom:0;" />

<span style="font-size:12px;">Toggling between themes</span>