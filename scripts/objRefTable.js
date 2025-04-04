const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Plugins.Keyboard,
		C3.Plugins.gamepad,
		C3.Plugins.Particles,
		C3.Behaviors.Bullet,
		C3.Behaviors.Platform,
		C3.Behaviors.Tween,
		C3.Behaviors.Timer,
		C3.Behaviors.Sin,
		C3.Plugins.Arr,
		C3.Plugins.LocalStorage,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Spritefont2,
		C3.Behaviors.EightDir,
		C3.Behaviors.destroy,
		C3.Behaviors.jumpthru,
		C3.Plugins.TiledBg,
		C3.Plugins.NinePatch,
		C3.Behaviors.LOS,
		C3.Behaviors.scrollto,
		C3.Plugins.Audio,
		C3.Plugins.advert,
		C3.Plugins.TextBox,
		C3.Behaviors.Flash,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Behaviors.Platform.Exps.VectorY,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Particles.Cnds.OnCreated,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Platform.Acts.SetVectorX,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Behaviors.Platform.Acts.SetIgnoreInput,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSetScore,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Behaviors.Sin.Acts.SetMagnitude,
		C3.Behaviors.Sin.Acts.SetPeriod,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Behaviors.Sin.Exps.Value,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.TiledBg.Acts.SetVisible,
		C3.Plugins.TiledBg.Acts.SetPosToObject,
		C3.Plugins.TiledBg.Acts.SetAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Behaviors.LOS.Acts.CastRay,
		C3.Behaviors.LOS.Cnds.RayIntersected,
		C3.Behaviors.LOS.Exps.HitX,
		C3.Behaviors.LOS.Exps.HitY,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Audio.Acts.SetMuted,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.NinePatch.Cnds.CompareInstanceVar,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardOpen,
		C3.Plugins.Audio.Acts.AddMuteEffect,
		C3.Plugins.Audio.Acts.RemoveEffects,
		C3.Plugins.LocalStorage.Acts.RemoveItem,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSetName,
		C3.Plugins.TiledBg.Acts.SetImageOffsetY,
		C3.Plugins.TiledBg.Exps.ImageOffsetY,
		C3.Plugins.System.Exps.dt,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.TextBox.Acts.SetVisible,
		C3.Plugins.Arr.Cnds.CompareXY,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Arr.Acts.Clear
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Tilemap: 0},
	{Pin: 0},
	{spr_player_mask: 0},
	{spr_portal: 0},
	{Keyboard: 0},
	{Gamepad: 0},
	{par_teleport: 0},
	{var_was_mirrored: 0},
	{beh_bullet: 0},
	{spr_teleport_ball: 0},
	{var_Portal_count: 0},
	{var_charge: 0},
	{Platform: 0},
	{Tween: 0},
	{spr_player: 0},
	{Timer: 0},
	{spr_clock: 0},
	{spr_respawn: 0},
	{beh_pin: 0},
	{par_dust: 0},
	{par_smoke: 0},
	{par_spawn: 0},
	{spr_door: 0},
	{Sine: 0},
	{key: 0},
	{spr_spike: 0},
	{LevelID: 0},
	{spr_Levelbox: 0},
	{txtLevelNumber: 0},
	{aLevelsStatus: 0},
	{LocalStorage: 0},
	{Mouse: 0},
	{Touch: 0},
	{spr_banner: 0},
	{spr_banner_2: 0},
	{textID: 0},
	{SpriteFont_1: 0},
	{OptionID: 0},
	{spr_huds: 0},
	{spr_hud_icons: 0},
	{var_distance_from_center: 0},
	{var_center_uid: 0},
	{spr_spike_ball: 0},
	{spr_chain: 0},
	{var_move_down: 0},
	{"8Direction": 0},
	{DestroyOutsideLayout: 0},
	{Jumpthru: 0},
	{spr_falling_platform: 0},
	{spr_jet_fire: 0},
	{var_chain_segments: 0},
	{var_angle_variation: 0},
	{var_full_cycle_duration: 0},
	{var_current_angle: 0},
	{spr_center: 0},
	{bac_background: 0},
	{ID: 0},
	{spr_black: 0},
	{FadeSprite: 0},
	{var_id: 0},
	{popup_setting: 0},
	{spr_play_button: 0},
	{Settings: 0},
	{LineOfSight: 0},
	{LaserTurret: 0},
	{LaserBeam: 0},
	{spr_sparck: 0},
	{spr_dust: 0},
	{ButtonID: 0},
	{spr_button_menu: 0},
	{spr_tuto: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{BackArrow: 0},
	{spr_watch_ads: 0},
	{var_text: 0},
	{SpriteFont_2: 0},
	{spr_arrows: 0},
	{spr_logo: 0},
	{Audio: 0},
	{MobileAdvert: 0},
	{spr_button_Screen: 0},
	{spr_Touch_Controls: 0},
	{TextInput: 0},
	{Flash: 0},
	{Spr_txt: 0},
	{Profile: 0},
	{Leaderboard: 0},
	{GamePush: 0},
	{Timer_txt: 0},
	{P_Button: 0},
	{R_Button: 0},
	{Buttons: 0},
	{Key: 0},
	{var_pause: 0},
	{door_opned: 0},
	{Score: 0},
	{var_time: 0},
	{Muted: 0},
	{SFX: 0},
	{Paused: 0},
	{Countdownmilliseconds: 0},
	{CountdownSeconds: 0},
	{direction: 0},
	{var_distance_between_chains: 0},
	{startX: 0},
	{startY: 0},
	{targetX: 0},
	{targetY: 0},
	{MenuOption: 0},
	{var_name_player: 0},
	{ControlMethod: 0},
	{Level: 0},
	{GameFirstExec: 0}
];

self.InstanceType = {
	Tilemap: class extends self.ITilemapInstance {},
	spr_player_mask: class extends self.ISpriteInstance {},
	spr_portal: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Gamepad: class extends self.IInstance {},
	par_teleport: class extends self.IParticlesInstance {},
	spr_teleport_ball: class extends self.ISpriteInstance {},
	spr_player: class extends self.ISpriteInstance {},
	spr_clock: class extends self.ISpriteInstance {},
	spr_respawn: class extends self.ISpriteInstance {},
	par_dust: class extends self.IParticlesInstance {},
	par_smoke: class extends self.IParticlesInstance {},
	par_spawn: class extends self.IParticlesInstance {},
	spr_door: class extends self.ISpriteInstance {},
	key: class extends self.ISpriteInstance {},
	spr_spike: class extends self.ISpriteInstance {},
	spr_Levelbox: class extends self.ISpriteInstance {},
	txtLevelNumber: class extends self.ISpriteInstance {},
	aLevelsStatus: class extends self.IArrayInstance {},
	LocalStorage: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	spr_banner: class extends self.ISpriteInstance {},
	spr_banner_2: class extends self.ISpriteInstance {},
	SpriteFont_1: class extends self.ISpriteFontInstance {},
	spr_huds: class extends self.ISpriteInstance {},
	spr_hud_icons: class extends self.ISpriteInstance {},
	spr_spike_ball: class extends self.ISpriteInstance {},
	spr_chain: class extends self.ISpriteInstance {},
	spr_falling_platform: class extends self.ISpriteInstance {},
	spr_jet_fire: class extends self.ISpriteInstance {},
	spr_center: class extends self.ISpriteInstance {},
	bac_background: class extends self.ITiledBackgroundInstance {},
	spr_black: class extends self.ITiledBackgroundInstance {},
	FadeSprite: class extends self.ISpriteInstance {},
	popup_setting: class extends self.IWorldInstance {},
	spr_play_button: class extends self.ISpriteInstance {},
	Settings: class extends self.ISpriteInstance {},
	LaserTurret: class extends self.ISpriteInstance {},
	LaserBeam: class extends self.ITiledBackgroundInstance {},
	spr_sparck: class extends self.ISpriteInstance {},
	spr_dust: class extends self.ISpriteInstance {},
	spr_button_menu: class extends self.ISpriteInstance {},
	spr_tuto: class extends self.IWorldInstance {},
	Camera: class extends self.ISpriteInstance {},
	BackArrow: class extends self.ISpriteInstance {},
	spr_watch_ads: class extends self.ISpriteInstance {},
	SpriteFont_2: class extends self.ISpriteFontInstance {},
	spr_arrows: class extends self.ISpriteInstance {},
	spr_logo: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	MobileAdvert: class extends self.IInstance {},
	spr_button_Screen: class extends self.ISpriteInstance {},
	spr_Touch_Controls: class extends self.ISpriteInstance {},
	TextInput: class extends self.ITextInputInstance {},
	Spr_txt: class extends self.ISpriteInstance {},
	Profile: class extends self.ISpriteInstance {},
	Leaderboard: class extends self.ISpriteInstance {},
	GamePush: class extends C3.Plugins.Eponesh_GameScore.Instance {},
	Timer_txt: class extends self.ISpriteFontInstance {},
	P_Button: class extends self.ISpriteInstance {},
	R_Button: class extends self.ISpriteInstance {},
	Buttons: class extends self.ISpriteInstance {}
}