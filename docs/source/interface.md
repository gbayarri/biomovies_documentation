# Interface

<img src="_static/interface/interface.png" style="margin-bottom:0;" />

<span style="font-size:12px;display:flex;justify-content:center;">Video Editor</span>

## Representation

<img src="_static/interface/representations/representations.png" style="max-width:800px;" />

The **stage** is the area where the 3D biological structure is represented, the **tools bar** allows to apply actions to the stage.

### Tools

The tools menu is at the top left of the **stage** and allows users to make some actions over it.

<img src="_static/interface/representations/tools/tools.png" />

This menu is **draggable** around all the stage and can be **collapsed / expanded** by clicking twice on the handler. For **hiding** it completely, go to _View > Tools_ in the menu. Click in the same menu for **showing** it again.

#### Center

<img src="_static/interface/representations/tools/tools01.png" />

Clicking this button **centers** the structure(s) position on the **stage**. This button is active only if **one single keyframe** of the timeline has been selected.

#### Background

<img src="_static/interface/representations/tools/tools02.png" />

Clicking this button opens a **color picker** that allows users to change the **background color** of the **stage**.

<img src="_static/interface/representations/tools/tools02b.png" />

Click **again** on the button for **hiding** the color picker.

#### Measurements

<img src="_static/interface/representations/tools/tools03.png" />

Clicking this button **opens a modal dialog** to edit the **distances and angles** created by users in the stage. For remembering how to draw them, please go to the [**Mouse click actions section**](#mouse-click-actions).

**Measurements** with size and color **by default**:

<img src="_static/interface/representations/tools/tools03a.png" style="max-width:500px;" />

##### Distances

**Distances** editor before editing size and color:

<img src="_static/interface/representations/tools/tools03b.png" style="max-width:500px;" />

**Distances** editor after editing size and color:

<img src="_static/interface/representations/tools/tools03c.png" style="max-width:525px;" />

If **only a distance** is needed (**without label**), please set **0 as Label siz**e.

##### Angles

**Angles** editor before editing size and color:

<img src="_static/interface/representations/tools/tools03d.png" style="max-width:500px;" />

**Angles** editor after editing size and color:

<img src="_static/interface/representations/tools/tools03e.png" style="max-width:525px;" />

If **only the lines** are needed (**without label**), please set **0 as Label size**.

**Measurements** after **size and color edition**:

<img src="_static/interface/representations/tools/tools03f.png" style="max-width:500px;" />

#### Labels

<img src="_static/interface/representations/tools/tools04.png" />

Clicking this button **opens a modal dialog** to edit the **labels** created by users in the stage. For remembering how to draw them, please go to the [**Mouse click actions section**](#mouse-click-actions).

**Labels** with size, text and color **by default**:

<img src="_static/interface/representations/tools/tools04a.png" style="max-width:500px;" />

**Labels** editor before editing text, size color and background:

<img src="_static/interface/representations/tools/tools04b.png" style="max-width:500px;" />

**Labels** editor after editing text, size color and background:

<img src="_static/interface/representations/tools/tools04c.png" style="max-width:500px;" />

Label **background** can be modified. Moreover, it can be **disabled** as well with the switch beside the background color **selector**.

**Labels** after **size, text and color edition**:

<img src="_static/interface/representations/tools/tools04d.png" style="max-width:500px;" />

#### Camera type

<img src="_static/interface/representations/tools/tools05.png" />

Switches camera type between **orthographic** and **perspective**.

#### Center view in atom

<img src="_static/interface/representations/tools/tools06.png" />

Click this button and then, **select an atom** of the structure, the view will be **focused** into this atom position. This button is active only if **one single keyframe** of the timeline has been selected.

#### Enable / Disable legend

<img src="_static/interface/representations/tools/tools07.png" />

Enables / disables a **legend** on the bottom right of the **stage**. This **legend** shows information for the molecule the mouse has hovered over in the next format:

> Model **number** | Chain **ID** | **Residue name (Residue long name) Residue number** Atom name (or Bond)

<img src="_static/interface/representations/tools/tools07b.png" />

#### Open keyframe editor

<img src="_static/interface/representations/tools/tools08.png" />

Clicking this button **opens a keyframe editor**. 

<img src="_static/interface/representations/tools/tools08b.png" />

In this editor, users can change the **rotation** and **translation** of the biological structure.

This button is active only if **one single keyframe** of the timeline has been selected.

#### Enable / Disable letterboxing

<img src="_static/interface/representations/tools/tools09.png" />

Enables / disables letterboxing on the **stage**. Two **stripes** will appear showing to the user which parts of the stage will be **rendered** and which not in case of **HD rendering**. In some cases (depending on the screen **aspect ratio**) these stripes won’t appear.

<img src="_static/interface/representations/tools/tools09b.png" style="max-width:500px" />

Click **again** on the button for **removing** the stripes from the stage.

### Stage

<img src="_static/interface/representations/stage/stage.png" style="max-width:600px;" />

The **stage** covers the main part of the screen. In the stage the **structure is loaded** and **represented**, and users can interact with it in several ways.

#### Zoom / Drag

Before applying **rotation**, **translation** or **zoom** to the stage, a [**keyframe must be selected in the timeline**](TODOOOO).

Actions of **zoom in** and **zoom out** can be done with the **scroll mouse or the trackpad** of a laptop:

* Clicking on the stage with the **left button** and **dragging will rotate the view**.

* Clicking on the stage with the **right button** and **dragging will translate the view**.

* Mouse wheel (or using the trackpad with two fingers) on the stage will **zoom in** or **zoom out**.

All these modifications in the **general orientation** of the structure will be applied to the **selected keyframe**. That means that, in a **clip**, the **first** and the **last frame** can have different **rotation**, **translation** or **zoom**. **Biomovies** will take care of the **interpolation** between frames.

<img src="_static/interface/representations/stage/stage01.gif" style="margin-bottom:0;" />

<span style="font-size:12px;">Automatic transition between two frames with different orientations</span>

#### Mouse actions

##### Mouse over actions

Passing the mouse over the molecules of the structure will **highlight** them and show **their information** in the **legend** on the bottom right of the stage. [**Click here**](#enable-disable-legend) to see how to enable the legend.

##### Mouse click actions

* Clicking with the mouse **left button** on an atom while pressing the **Alt or ⌥ key** will **place a Label** close to this atom. [**Click here**](#labels) to see how to edit labels.

* Clicking **consecutively on two atoms** with the mouse **left button** will draw and calculate the **distance** in **ångströms** between these two atoms. [**Click here**](#distances) to see how to edit distances.

* Clicking **consecutively on three atoms** with the mouse **right button** while pressing the **Ctrl key** will draw and calculate the **angle** in **degrees** between these three atoms. [**Click here**](#angles) to see how to edit angles.

## Timeline

### Timer

### Create new timeline item

#### Clip

#### Cloned Clip

#### Transition

#### Fade In

#### Fade Out

#### Description

### Timeline menu

#### Remove

#### Timeline controls

##### Reset timeline

##### Pan mode

##### Zoom

#### Keyframes actions

##### Align last keyframe

##### Align first keyframe

##### Select all keyframes

##### Move keyframes left

##### Move keyframes right

#### Player

##### Go to first frame

##### Go to previous frame

##### Play / Pause

##### Go to next frame

##### Go to last frame

### Main structure

### Descriptions

### Timeline editor

### Tips

## Controls

### Keyframes / Clips

### Descriptions

### Trajectories

## Status Bar

### Tips

### Project status

### Version

### Theme