//
//  ViewController.h
//  DellVideoPlayer
//
//  Created by Heather Simmons on 2014-09-16.
//  Copyright (c) 2014 Heather Simmons. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MediaPlayer/MediaPlayer.h>

@interface ViewController : UIViewController

@property (strong, nonatomic) MPMoviePlayerController *moviePlayer;
- (IBAction)playBusModelMovie:(id)sender;
- (IBAction)playExecutionMovie:(id)sender;
- (IBAction)playAbundanceMovie:(id)sender;
- (IBAction)playMichaelMovie:(id)sender;
- (IBAction)playCultureMovie:(id)sender;
- (IBAction)playRiskMovie:(id)sender;
- (IBAction)playWallStreetMovie:(id)sender;
- (IBAction)playCultureShiftMovie:(id)sender;
- (IBAction)playFutureTechMovie:(id)sender;

@end

